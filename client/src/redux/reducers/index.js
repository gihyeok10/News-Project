import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";
import newsReducer from "./newsReducer"
import searchReducer from "./searchReducer";
import getSearchReducer from "./getSearchReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root", // localStorage key 
    storage, // localStorage
    whitelist: ["search","news"], // target (reducer name)
  }
  
  const rootReducer = combineReducers({
    userInfo:userInfoReducer,
    news:newsReducer,
    search:searchReducer,
    getSearch:getSearchReducer
  });
export default persistReducer(persistConfig,rootReducer);