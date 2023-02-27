import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchAction } from "../redux/aciton/searchAction";
import { Container } from "react-bootstrap";
import Emoj from "../component/Emoj";
import Comment from "../component/Comment";

const DetailPage = () => {
  // const dispatch = useDispatch();
  // const params = useParams();
  // console.log("파람",params.title)
  const { searchData } = useSelector((state) => state.search);
  // useEffect(()=>{
  //   dispatch(searchAction.searchNews(params.title))
  // },[])
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
        <Emoj searchData={searchData}></Emoj>
      <hr></hr>
      <Comment searchData={searchData}/>      
    </Container>
  );
};

export default DetailPage;

//디테일 페이지 구현
//디테일 페이지 에 글쓰기 기능 추가



//1. 좋아요나 글쓰기를 눌렀을때 로그인 상태인지 아닌지 파악!!
//2. 좋아요, 싫어요, 화나요, 팬이에요 누르면 카운트 +1씩 할 수 있슴.
//3. 글쓰기 하면 글이 올라감. (네이버 api는 나중일.)
//4. title로 url주소를 파악할 수 있다. 그러니까 title 주소로 테이블을 생성해야한다 처음 좋아요나 글 쓰기를 할때


//emoji table == > id(auto),title(url),happy,sad,mad,fan
//comment table ==> id(auto),title(url),comment,date,user_id