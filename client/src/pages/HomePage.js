import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { newsAction } from "../redux/aciton/newsAction";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";

import { Container, Nav,Navbar } from "react-bootstrap";
import TopContent from "../component/TopContent";
import axios from "axios";
const HomePage = () => {
  let now = new Date(); 
  let todayMonth = now.getMonth()+1;
  let todayDate = now.getDate();
  const week = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
  let dayOfWeek = week[now.getDay()];

  const [category, setCategory] = useState("sport");

  const dispatch = useDispatch();
  const { newsData } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(newsAction.getNews(category));
  }, [category]);

  const changeCategory = (genre) => {
    setCategory(genre);
  };

  console.log("뉴스데이타~", newsData);

  return (
    <div>
    <Navbar bg="white" variant="dark">
    <Container>
      <Nav className="navCategory">
        <h5 onClick={()=> setCategory("sport")} className="marginMenu1">Sport</h5>
        <h5 onClick={()=> setCategory("business")} className="marginMenu">Business</h5>
        <h5 onClick={()=> setCategory("entertainment")} className="marginMenu">Entertainment</h5>
        <h5 onClick={()=> setCategory("general")} className="marginMenu">General</h5>
        <h5 onClick={()=> setCategory("health")} className="marginMenu">Health</h5>
        <h5 onClick={()=> setCategory("science")} className="marginMenu">Science</h5>
        <h5 onClick={()=> setCategory("technology")} className="marginMenu">Technology</h5>
      </Nav>
    </Container>
  </Navbar>
    <Container className="Homepage" bg="light">
    <div className="date">
      <p>{todayMonth}/{todayDate}({dayOfWeek})</p>
      <hr></hr>
    </div>
      <Banner newsData={newsData} />
      <TopContent newsData={newsData}/>
    </Container>
    </div>
  );
};

export default HomePage;

//메인은 사진,타이틀 정도
// 나머지 기사는 크롤링을 해서 가져오자.
