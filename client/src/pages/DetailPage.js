import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
const DetailPage = () => {
  const { searchData } = useSelector((state) => state.search);
  console.log("제발,..", searchData);
  return (
    <Container>
    <div>
      <h1>{searchData.title}</h1>
    </div>
      <div>
        <img src={searchData.urlToImage}></img>
      </div>
      <div>
        <p>{searchData.source.name}</p>
        <p>{searchData.publishedAt}</p>

      </div>
      <div>
      <p>sumarry:{searchData.description}</p>
      <p>{searchData.content}</p>
      </div>
    </Container>
  );
};

export default DetailPage;
