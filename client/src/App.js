import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage'
import Login from './pages/Login'
import Join from './pages/Join';
import MyPage from './pages/MyPage'
import Search from './pages/SearchPage'
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userInfoAction } from './redux/aciton/userInfoAction';
function App() {

  let user = {}
  const dispatch = useDispatch();
  const goUser = () => {
    if(sessionStorage.getItem('user_id')){
    axios
      .post("http://localhost:3001/userInfo2", {
        id: sessionStorage.getItem('user_id')
      })
      .then((res) => {

        console.log(res.data[0]);
        user = res.data[0];
        dispatch(userInfoAction.getUserInfo(user));
       
      });
    }
  };

  useEffect(()=>{
    goUser()
  },[])


  return (
    <div className="App">
    <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/join' element={<Join/>}></Route>
        <Route path='/myPage' element={<MyPage/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        
      </Routes>
   
    </div>
  );
}

export default App;
