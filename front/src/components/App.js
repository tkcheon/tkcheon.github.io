import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function App() {

  const [testStr, setTestStr] = useState('');
  const [test2api, setTestStr2] = useState('');

  // 첫 번째 API 호출
  useEffect(() => {
    axios
      .get('/api/test') // 상대 경로로 요청
      .then((response) => setTestStr(response.data))
      .catch((error) => console.log('Error fetching /api/test:', error));
  }, []); // 빈 배열은 컴포넌트 마운트 시 한 번만 실행

  // 두 번째 API 호출
  useEffect(() => {
    axios
      .get('/api/test2') // 상대 경로로 요청
      .then((response) => setTestStr2(response.data))
      .catch((error) => console.log('Error fetching /api/test2:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        /api/test =={'>'} {testStr}
        <br />
        /api/test2 =={'>'} {test2api}
      </header>
    </div>
  );

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<homePage/>} />
      <Route path="posts" element={<PostListPage/>} />
        <Route index element={<PostListPage/>}/>
        <Route path=":postId" element={<PostPage/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
