import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchAction } from "../redux/aciton/searchAction";
const ContentCard = (item) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const detailGo = () => {
      dispatch(searchAction.searchNews(item.item));
      navigate(`/detail/${item.item.title}`);
    };
  return (
     <Card style={{ width: "25rem" }} className="newsContentmargin" onClick={detailGo}>
                    <Card.Img
                      variant="top"
                      src={item.item.urlToImage}
                      className="img-t"
                    />
                    <Card.Body>
                      <Card.Title>{item.item.description&& item.item.title.substr(0, 31)}..</Card.Title>
                      <Card.Text>{item.item.description&& item.item.description.substr(0,90)}...</Card.Text>
                    </Card.Body>
                  </Card> 
  )
}

export default ContentCard