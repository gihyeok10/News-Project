let initialState = {
    user:{}
    };
  
    function userInfoReducer(state = initialState, action){
      let {type,payload} = action;
  
      switch(type) {
          case "SUCCESS_LOGIN":
              return{
                  ...state,
              user:payload.user
              }
  
              default:return{...state}
      }
  
    }
  
    export default userInfoReducer