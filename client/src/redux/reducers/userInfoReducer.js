let initialState = {
    id:"",
    name:"",
    phone:"",
    email:"",
    password:""
    };
  
  
  
    function userInfoReducer(state = initialState, action){
  
      let {type,payload} = action;
  
      switch(type) {
          case "SUCCESS_LOGIN":
              return{
                  ...state,
               id:payload.id
              }
  
              default:return{...state}
      }
  
    }
  
    export default userInfoReducer