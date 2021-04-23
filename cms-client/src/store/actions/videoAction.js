import axios from 'axios';
import swal from 'sweetalert';
import { setAwsVideo, setAwsThumbnail } from './awsVideoAction';

export function setVideo(payload) {
  return { type: 'video/setVideo', payload };
}

export function videoEditAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setVideo(data));
        dispatch(setAwsVideo(data.url));
        dispatch(setAwsThumbnail(data.thumbnail));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function deleteVideoAsync({ urlDel, history, lecturerId }) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        axios({
          url: urlDel,
          method: 'DELETE',
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            swal(data.msg, {
              icon: "success",
            });
            history.push('/edit-lecturer/' + lecturerId);
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        swal("Your imaginary file is safe!");
      }
    });
}

export function editVideoAsync({ url, payload, history }) {
  axios({
    url: url,
    method: 'PUT',
    headers: { access_token: localStorage.access_token },
    data: payload
  })
    .then(({ data }) => {
      history.push('/edit-lecturer/' + data[1][0].LecturerId);
      swal({
        title: "Update video completed!",
        text: "Happy working!",
        icon: "success",
        button: "OK",
      });
    })
    .catch(err => {
      console.log(err);
    })
}