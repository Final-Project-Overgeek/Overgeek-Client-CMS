import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import lecturerReducer from './lecturerReducer';

const reducer = combineReducers({ adminReducer, lecturerReducer }); 

export default reducer;