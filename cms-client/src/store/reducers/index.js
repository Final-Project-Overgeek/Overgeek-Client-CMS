import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import lecturerReducer from './lecturerReducer';
import awsVideoReducer from './awsVideoReducer';

const reducer = combineReducers({ adminReducer, lecturerReducer, awsVideoReducer }); 

export default reducer;