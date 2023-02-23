import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import ContentCard from "./ContentCard";
const TopContent = (newsData) => {
  return (
    <Container>
      <div>
        <h2>Top 20 Contents</h2>
      </div>
      <Row>
        {newsData.newsData.articles &&
          newsData.newsData.articles.map((item, index) => {
            
            if (index > 4) {
              return (
                <Col className="" key={item.title}>
                    <ContentCard item={item}/>
                </Col>
                
              );
            }
          })}
      </Row>
    </Container>
  );
};

export default TopContent;


{/* <Card style={{ width: "25rem" }} className="newsContentmargin">
                    <Card.Img
                      variant="top"
                      src={item.urlToImage}
                      className="img-t"
                    />
                    <Card.Body>
                      <Card.Title>{item.description&& item.title.substr(0, 31)}..</Card.Title>
                      <Card.Text>{item.description&& item.description.substr(0,90)}...</Card.Text>
                    </Card.Body>
                  </Card> */}