import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Emoj from "../component/Emoj";
import Comment from "../component/Comment";
const DetailPage = () => {
  const { searchData } = useSelector((state) => state.search);
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
          <a href={searchData.url}>See details</a>
        </p>
      </div>
      <hr></hr>
        <Emoj></Emoj>
      <hr></hr>
      <Comment/>      
    </Container>
  );
};

export default DetailPage;

//디테일 페이지 구현
//디테일 페이지 에 글쓰기 기능 추가
