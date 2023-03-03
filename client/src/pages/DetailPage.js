import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Emoj from "../component/Emoj";
import Comment from "../component/Comment";
import DetailInfo from "../component/DetailInfo";
const DetailPage = () => {
  const { searchData } = useSelector((state) => state.search);

  return (
    <div className="tile">
      <Container>
        <DetailInfo searchData={searchData} />
        <hr></hr>
        <Emoj searchData={searchData}></Emoj>
        <hr></hr>
        <Comment searchData={searchData} />
      </Container>
    </div>
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

//clear
