
import axios from "axios";
function searchNews (title) {
    console.log("데이터 잘감?",title)
    
    return (dispatch) =>{
      
        dispatch({
            type: "SUCCESS_GET_SEARCH",
            payload:{
                searchData:title
            }
        })

    }


} export const searchAction = {
    searchNews,
  };