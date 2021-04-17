const initialState = {
  lecturers: [],
  lecturer: {}
};

function lecturerReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'lecturers/setLecturers') {
    return { ...state, lecturers: payload };
  } else if (type === 'lecturer/setLecturer') {
    return { ...state, lecturer: payload };
  }

  return state;
}

export default lecturerReducer;