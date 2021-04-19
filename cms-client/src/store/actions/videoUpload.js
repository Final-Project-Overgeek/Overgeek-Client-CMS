import axios from 'axios';

export function uploadVideoAsync({ url, payload }) {
  axios.post(url, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(data => {
      alert('success')
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    })
}

export function saveVideoDetailAsync({ url, payload }) {
  axios({
    url: url,
    data: payload,
    headers: { access_token: localStorage.access_token }
  })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    })
}