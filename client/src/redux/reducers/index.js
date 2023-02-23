import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import newsReducer from "./newsReducer"
import searchReducer from "./searchReducer";
export default combineReducers({
    userInfo:userInfoReducer,
    news:newsReducer,
    search:searchReducer
    
});