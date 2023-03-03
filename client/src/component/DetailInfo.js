import React from "react";
import { Container } from "react-bootstrap";
const DetailInfo = ({ searchData }) => {
  return (
    <Container>
      <Container className="title_center2">
        <div className="title_center">
          <h1>{searchData.title}</h1>
          <hr></hr>
        </div>
      </Container>
      <Container>
        <div className="article_img">
          <img src={searchData.urlToImage}></img>
        </div>
      </Container>
      <hr></hr>
      <div className="contents_box">
        {searchData.author && <p>Author: [{searchData.author}]</p>}
        <p>[{searchData.source.name}]</p>
        <p>Article entry time: {searchData.publishedAt.substr(0, 10)}</p>
      </div>
      <div className="contents_box">
        <p>{searchData.content}</p>
        <p>Summary: {searchData.description}</p>
        <p>
          <a href={searchData.url}>See Details</a>
        </p>
      </div>
    </Container>
  );
};

export default DetailInfo;
