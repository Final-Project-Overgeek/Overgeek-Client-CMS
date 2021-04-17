const initialState = {
  admin: {}
};

function adminReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'admin/setAdmin') {
    return { ...state, admin: payload };
  }

  return state;
}

export default adminReducer;