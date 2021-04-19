import axios from 'axios';
import { setAwsVideo } from './awsVideoAction';

export function uploadVideoAsync({ url, payload }) {
  return ((dispatch) => {
    axios.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(data => {
        alert('success', data.data.awsVideo);
        dispatch(setAwsVideo(data));
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
      console.log(data)
      history.push('/edit-lecturer/' + data.LecturerId);
    })
    .catch(err => {
      console.log(err);
    })
}