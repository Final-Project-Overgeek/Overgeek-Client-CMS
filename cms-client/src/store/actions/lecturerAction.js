import swal from 'sweetalert';
import axios from 'axios';

export function setLecturers(payload) {
  return { type: 'lecturers/setLecturers', payload };
}

export function setLecturersAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setLecturers(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function setLecturer(payload) {
  return { type: 'lecturer/setLecturer', payload };
}

export function setLecturerAsync({ url, setLoading }) {
  return ((dispatch) => {
    axios({
      url: url,
      method: 'GET',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setLecturer(data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function addLecturerAsync({ url, history, payload }) {
  axios({
    url: url,
    method: 'POST',
    data: payload,
    headers: { access_token: localStorage.access_token }
  })
    .then(({ data }) => {
      swal({
        title: "Good job!",
        text: `${data.name} successfully to created!`,
        icon: "success",
        button: "OK",
      });
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
}

export function setEditLecturer(payload) {
  return { type: 'editLecturer/setEditLecturer', payload };
}

export function saveEditAsync({ url, setLoading, history, payload }) {
  axios({
    url: url,
    method: 'PUT',
    data: payload,
    headers: { access_token: localStorage.access_token }
  })
    .then(({ data }) => {
      swal({
        title: "Good job!",
        text: `Edit ${data[1][0].name} completed!`,
        icon: "success",
        button: "OK",
      });
      history.push('/');
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
}

export function deleteLecturerAsync({ urlDel, url, setLoading }) {
  return (dispatch) => {
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
              dispatch(setLecturersAsync({ url, setLoading }))
              swal(data.msg, {
                icon: "success",
              })
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }
}