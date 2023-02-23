import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { newsAction } from "../redux/aciton/newsAction";
import Banner from "../component/Banner";
import { Container, Nav } from "react-bootstrap";
import TopContent from "../component/TopContent";
import axios from "axios";
const HomePage = () => {

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
    <Container className="Homepage" bg="light">
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            onClick={() => changeCategory("business")}
          >
            경제
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => changeCategory("entertainment")}
          >
            연예
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => changeCategory("general")}>
            정치
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => changeCategory("sports")}>
            스포츠
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" onClick={() => changeCategory("health")}>
            건강
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-6"
            onClick={() => changeCategory("technology")}
          >
            기술
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-7"
            onClick={() => changeCategory("science")}
          >
            과학
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Banner newsData={newsData} />
      <TopContent newsData={newsData}/>
    </Container>
  );
};

export default HomePage;

//메인은 사진,타이틀 정도
// 나머지 기사는 크롤링을 해서 가져오자.
