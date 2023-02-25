import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import newsReducer from "./newsReducer"
import searchReducer from "./searchReducer";
import getSearchReducer from "./getSearchReducer";
export default combineReducers({
    userInfo:userInfoReducer,
    news:newsReducer,
    search:searchReducer,
    getSearch:getSearchReducer
});