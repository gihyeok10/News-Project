import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import ContentCard from "./ContentCard";
const TopContent = ({newsData,name,margin,number}) => {
  return (
    <Container>
      <div className="topArticles" style={{marginTop:margin}}>
        <h2>{name}</h2>
      </div>
      <Row>
        {newsData.articles &&
        newsData.articles.map((item, index) => {
            
            if (index > number) {
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

