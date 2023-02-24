import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import ContentCard from "./ContentCard";
const TopContent = (newsData) => {
  return (
    <Container>
      <div className="topArticles">
        <h2>Top 20 Articles</h2>
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

