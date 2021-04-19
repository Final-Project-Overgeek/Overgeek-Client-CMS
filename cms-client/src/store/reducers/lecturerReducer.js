const initialState = {
  lecturers: [],
  lecturer: {},
  lecturerDataEdit: {},
  lecturerDataAdd: {}
};

function lecturerReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'lecturers/setLecturers') {
    return { ...state, lecturers: payload };
  } else if (type === 'lecturer/setLecturer') {
    return { ...state, lecturer: payload };
  } else if (type === 'addLecturer/setAddLecturer') {
    return { ...state, lecturerDataAdd: payload };
  } else if (type === 'editLecturer/setEditLecturer') {
    return { ...state, lecturerDataEdit: payload };
  }

  return state;
}

export default lecturerReducer;