let initialState = {
    searchData:{}
    };
    
    console.log("서치데이터",initialState.searchData)
    function searchReducer(state = initialState, action){
      let {type,payload} = action;
  
      switch(type) {
          case "SUCCESS_GET_SEARCH":
              return{
                  ...state,
                  searchData:payload.searchData
              }
  
              default:return{...state}
      }
  
    }
  
    export default searchReducer