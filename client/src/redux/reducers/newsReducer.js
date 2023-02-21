let initialState = {
    newsData:{}
    };
  
    function userInfoReducer(state = initialState, action){
      let {type,payload} = action;
  
      switch(type) {
          case "SUCCESS_GET_NEWS":
              return{
                  ...state,
                  newsData:payload.newsData
              }
  
              default:return{...state}
      }
  
    }
  
    export default userInfoReducer