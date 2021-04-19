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
      console.log(data)
      history.push('/');
    })
    .catch(err => {
      console.log(err);
    })
}

export function setEditLecturer(payload){
  return { type: 'editLecturer/setEditLecturer', payload};
}

export function saveEditAsync({ url, setLoading, history, payload }) {
  axios({
      url: url,
      method: 'PUT',
      data: payload,
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        // console.log(data, '=======')
        // dispatch(setEditLecturer(data));
        history.push('/');
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  // return ((dispatch) => {
  //   console.log(payload)
  //   axios({
  //     url: url,
  //     method: 'PUT',
  //     data: payload,
  //     headers: { access_token: localStorage.access_token }
  //   })
  //     .then(({ data }) => {
  //       console.log(data)
  //       dispatch(setEditLecturer(data));
  //       history.push('/');
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // })
}

export function deleteLecturerAsync({ urlDel, url, setLoading }) {
  return (dispatch) => {
    axios({
      url: urlDel,
      method: 'DELETE',
      headers: { access_token: localStorage.access_token }
    })
      .then(({ data }) => {
        dispatch(setLecturersAsync({ url, setLoading }))
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
}