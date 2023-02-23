
import axios from "axios";
import { useState } from "react";
function getNews (category) {
    let newsData = {}
    return async(dispatch) =>{
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=26&apiKey=d9d0e7acd4d24e98b5eb2cd4e9dbc510`,
            );
            newsData = response.data
            console.log(response.data)
          } catch(e) {
            console.log(e);
          }    
       
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