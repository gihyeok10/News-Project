function getNews() {
    return(dispatch) =>{
        
        let newsData = {}
        console.log("안녕")
        dispatch({
            type: "SUCCESS_GET_NEWS",
            payload:{
                newsData:newsData
            }
        })

    }


} export const newsAction = {
    getNews,
  };