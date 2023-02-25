function zero() {
  let inPutSearchData = {};
  return async (dispatch) => {
    dispatch({
      type: "SUCCESS_ZERO",
      payload: {
        inPutSearchData: inPutSearchData,
      },
    });
  };
}
export const zeroAction = {
  zero,
};
