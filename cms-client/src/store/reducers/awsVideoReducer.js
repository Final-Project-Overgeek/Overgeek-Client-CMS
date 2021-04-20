const initialState = {
  awsVideo: '',
  // awsVideo: '/upload/data/0699f679dd8aec56a9b31568d5df2868'
  // 8dac5ebbeadebdacccd5f4c8e55bbbfa
  awsThumbnail: ''
};

function awsVideoReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'awsVideo/setAwsVideo') {
    return { ...state, awsVideo: payload };
  } else if (type === 'awsThumbnail/setAwsThumbnail') {
    return { ...state, awsThumbnail: payload };
  }

  return state;
}

export default awsVideoReducer;