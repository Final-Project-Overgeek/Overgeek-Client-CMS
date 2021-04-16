import axios from 'axios';

export function loginAsync({ url, payload, history }) {
  axios({
    url: url,
    method: 'POST',
    data: {
      email: payload.email,
      password: payload.password
    }
  })
    .then(({ data }) => {
      localStorage.setItem('access_token', data.access_token);
      history.push('/');
    })
    .catch(err => {
      alert('fail')
      console.log(err);
    })
}