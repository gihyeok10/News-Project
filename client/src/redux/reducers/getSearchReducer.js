let initialState = {
    inPutSearchData:{}
    };
  
    function getSearchReducer(state = initialState, action){
      let {type,payload} = action;
  
      switch(type) {
          case "SUCCESS_GET_INPUT_SEARCH":
              return{
                  ...state,
                  inPutSearchData:payload.inPutSearchData
              }

              case "SUCCESS_ZERO":
                return{
                    ...state,
                    inPutSearchData:payload.inPutSearchData
                }
    
  
              default:return{...state}
      }
  
    }
  
    export default getSearchReducer