function getUserInfo(userInformation) {
    return (dispatch) => {

      console.log("액션이요~~",userInformation.phone_number)  
      dispatch({
        type: "SUCCESS_LOGIN",
        payload: {
          user:userInformation
        },
      });
    };
  }
  
  export const userInfoAction = {
    getUserInfo,
  };
  