import swal from 'sweetalert';
import axios from 'axios';
import { setAwsVideo, setAwsThumbnail } from './awsVideoAction';

export function uploadVideoAsync({ url, payload, setLoading }) {
  return ((dispatch) => {
    axios.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(data => {
        dispatch(setAwsVideo(data.data.awsVideo));
        setLoading(false);
        swal({
          title: "Upload video completed!",
          text: "Please continue to filling video form",
          icon: "success",
          button: "OK",
        });
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function uploadThumbnailAsync({ urlUploadThumbnail, payload, setLoading }) {
  return ((dispatch) => {
    axios.post(urlUploadThumbnail, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(data => {
        dispatch(setAwsThumbnail(data.data.awsImage));
        setLoading(false);
        swal({
          title: "Upload thumbnail completed!",
          text: "Please continue to filling video form",
          icon: "success",
          button: "OK",
        });
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function saveVideoDetailAsync({ urlSaveVideo, payload, history }) {
  axios({
    url: urlSaveVideo,
    method: 'POST',
    data: payload,
    headers: { access_token: localStorage.access_token }
  })
    .then(({ data }) => {
      history.push('/edit-lecturer/' + data.LecturerId);
      swal({
        title: "New video data successfully to create",
        text: "Happy working!",
        icon: "success",
        button: "OK",
      });
    })
    .catch(err => {
      console.log(err);
    })
}