import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { getSearchAction } from "../redux/aciton/getSearchAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faSearch } from "@fortawesome/free-solid-svg-icons";
import TopContent from "../component/TopContent";
const SearchPage = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.userInfo);
  const [searchInput, setSearchInput] = useState("");
  const { inPutSearchData } = useSelector((state) => state.getSearch);
  const goSearch = () => {
    console.log(searchInput);
    dispatch(getSearchAction.getSearch(searchInput));
  };
  const [checkData,setCheckData] = useState(false)
  const totalResult = () => {
    if(inPutSearchData.totalResults == 0){
      setCheckData(false)
    }
    else{
      setCheckData(true)
    }
    }

    useEffect(()=> {
      totalResult()
    },[inPutSearchData])
  return (
   
    <Container>
      <div className="search-bar1">
        <div className="search-bar">
          <div>
            <h2 className="newsWorld">News World</h2>
            <div class="searchbar">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input
                onChange={(e)=>{setSearchInput(e.target.value)}}
                class="search-input"
                type="text"
                placeholder="Input Articles KeyWorld"
              />
              <FontAwesomeIcon icon={faKeyboard} className="icon" />
            </div>
            <div className="input_bar2">
              <Button onClick={goSearch}>Search</Button>
            </div>
          </div>
        </div>
      </div>
      {checkData? <TopContent newsData={inPutSearchData} name="Search Articles" margin={0} number={0}/>: <h1 className="cen">No articles were found.</h1>}
      <div className="foot"></div>
    </Container>
    
  );
};

export default SearchPage;

//dispath로 값을 보내준다.
//해당 값으로 keyword로 api 검색을 해준다.
//유스 셀랙터로 불러온다.
//랜더링
//엔터 눌러도 되게
// search 데이터가 없으면 없다고 
