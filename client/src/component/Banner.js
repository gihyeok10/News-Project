import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../redux/aciton/searchAction";
const Banner = (newsData) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailGo = (news) => {
    dispatch(searchAction.searchNews(news));
    navigate(`/detail/${news.title}`);
  };

  return (
    <Container>
    <h1 style={{marginTop:"2em"}}>Head Line News</h1>
      <div className="banner">   
        {newsData.newsData.articles && (
          <div
            onClick={() => detailGo(newsData.newsData.articles[0])}
            className="banner-first"
            style={{
              backgroundImage:
                "url(" + `${newsData.newsData.articles[0].urlToImage}` + ")",
            }}
          >
            <div className="banner-info">
              <h5>{newsData.newsData.articles[0].title}</h5>
              {/* <p>{movie.overview}</p> */}
            </div>
          </div>
        )}

        <div className="banner-second">
          <div className="banner-second-ft">
            {newsData.newsData.articles && (
              <div
                onClick={() => detailGo(newsData.newsData.articles[1])}
                className="banner-second-ft-ft"
                style={{
                  backgroundImage:
                    "url(" +
                    `${newsData.newsData.articles[1].urlToImage}` +
                    ")",
                }}
              >
                <div className="banner-info2">
                  <p>{newsData.newsData.articles[1].title.substr(0, 60)}</p>
                  {/* <p>{movie.overview}</p> */}
                </div>
              </div>
            )}
            {newsData.newsData.articles && (
              <div
                onClick={() => detailGo(newsData.newsData.articles[2])}
                className="banner-second-ft-ft"
                style={{
                  backgroundImage:
                    "url(" +
                    `${newsData.newsData.articles[2].urlToImage}` +
                    ")",
                }}
              >
                {" "}
                <div className="banner-info2">
                  <p>{newsData.newsData.articles[2].title.substr(0, 60)}</p>
                  {/* <p>{movie.overview}</p> */}
                </div>
              </div>
            )}
          </div>
          <div className="banner-second-ft">
            {newsData.newsData.articles && (
              <div
                onClick={() => detailGo(newsData.newsData.articles[3])}
                className="banner-second-ft-ft"
                style={{
                  backgroundImage:
                    "url(" +
                    `${newsData.newsData.articles[3].urlToImage}` +
                    ")",
                }}
              >
                {" "}
                <div className="banner-info2">
                  <p>{newsData.newsData.articles[3].title.substr(0, 60)}</p>
                  {/* <p>{movie.overview}</p> */}
                </div>
              </div>
            )}
            {newsData.newsData.articles && (
              <div
                onClick={() => detailGo(newsData.newsData.articles[4])}
                className="banner-second-ft-ft"
                style={{
                  backgroundImage:
                    "url(" +
                    `${newsData.newsData.articles[4].urlToImage}` +
                    ")",
                }}
              >
                {" "}
                <div className="banner-info2">
                  <p>{newsData.newsData.articles[4].title.substr(0, 60)}</p>
                  {/* <p>{movie.overview}</p> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
    
  );
};

export default Banner;
