import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import lecturerReducer from './lecturerReducer';
import awsVideoReducer from './awsVideoReducer';
import videoReducer from './videoReducer';

const reducer = combineReducers({ adminReducer, lecturerReducer, awsVideoReducer, videoReducer }); 

export default reducer;