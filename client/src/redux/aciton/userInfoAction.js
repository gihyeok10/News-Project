import axios from "axios"
function getUserInfo(id) {

    return (dispatch) => {

        
      dispatch({
        type: "SUCCESS_LOGIN",
        payload: {
         id:id
        },
      });
    };
  }
  
  export const userInfoAction = {
    getUserInfo,
  };
  