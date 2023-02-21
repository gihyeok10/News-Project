
import axios from "axios";
import { useState } from "react";
function getNews (category) {
    let newsData = {}
    return async(dispatch) =>{
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=95dbe05fd0a94565ad2bb9718feb8d06`,
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