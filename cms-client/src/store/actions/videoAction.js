import axios from 'axios';

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
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  })
}

export function deleteVideoAsync({ urlDel, history, lecturerId }) {
  axios({
    url: urlDel,
    method: 'DELETE',
    headers: { access_token: localStorage.access_token }
  })
    .then(({ data }) => {
      console.log(data)
      history.push('/edit-lecturer/' + lecturerId);
    })
    .catch(err => {
      console.log(err)
    })
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
    })
    .catch(err => {
      console.log(err);
    })
}