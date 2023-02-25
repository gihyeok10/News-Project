import axios from "axios";
function getSearch(keyworld) {
  let inPutSearchData = {};
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyworld}&pageSize=26&apiKey=d9d0e7acd4d24e98b5eb2cd4e9dbc510`
      );
      inPutSearchData = response.data;
      console.log("키워드로 검색하기", response.data);
    } catch (e) {
      console.log(e);
    }

    dispatch({
      type: "SUCCESS_GET_INPUT_SEARCH",
      payload: {
        inPutSearchData: inPutSearchData,
      },
    });
  };
}
export const getSearchAction = {
  getSearch,
};
