import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage'
import Login from './pages/Login'
import Join from './pages/Join';
import MyPage from './pages/MyPage'
import Search from './pages/SearchPage'
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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
