import axios from 'axios';
import swal from 'sweetalert';

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
      swal({
        title: "Welcome to Overgeek Admin Dashboard",
        text: "Happy Working!",
        icon: "success",
        button: "Aww yiss!",
      });
      history.push('/');
    })
    .catch(err => {
      alert('fail')
      console.log(err);
    })
}