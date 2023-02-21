import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import newsReducer from "./newsReducer"
export default combineReducers({
    userInfo:userInfoReducer,
    news:newsReducer
    
});