
import axios from "axios";
import { useState } from "react";
function getNews (category) {
    let newsData = {}
    return async(dispatch) =>{
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/everything?q=${category}&pageSize=26&apiKey=2eae0c3fffcc4b99ab354a731f2eec04`,
            );
            newsData = response.data
            console.log(response.data)
          } catch(e) {
            console.log(e);
          }    
       
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