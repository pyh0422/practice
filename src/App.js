import { styled } from 'styled-components';
import './App.css';
import { Route, Routes } from 'react-router-dom';


const Btn = styled.button`
background: pink;
font-size: 25px;
`

function App() {
  return (
    <div className="App">
      <Btn>버튼</Btn>
      <div>헤더작업</div>
      <div>작업하나 추가함</div>
      <Routes>
        <Route path='/' element={<div>메인페이지</div>} />
        <Route path='/new' element={<div>새글페이지</div>} />
        <Route path='/edit' element={<div>수정페이지</div>} />

      </Routes>
      <div>푸터작업</div>
    </div>
  );
}

export default App;
