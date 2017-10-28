import { combineReducers } from "redux";
import auth from './auth';
import member from './member';
// import nav from './nav';

export default combineReducers({
    auth,
    member,
    // nav
})