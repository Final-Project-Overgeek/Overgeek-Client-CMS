const initialState = {
  awsVideo: '/upload/data/0699f679dd8aec56a9b31568d5df2868'
};

function awsVideoReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'awsVideo/setAwsVideo') {
    return { ...state, awsVideo: payload };
  }

  return state;
}

export default awsVideoReducer;