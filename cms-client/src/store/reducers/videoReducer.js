const initialState = {
  video: {}
};

function videoReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'video/setVideo') {
    return { ...state, video: payload };
  }

  return state;
}

export default videoReducer;