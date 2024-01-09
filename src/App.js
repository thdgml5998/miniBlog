import React, { Children } from "react";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
// 메인페이지
import PostViewPage from "./component/page/PostViewPage";
// 작성된페이지
import PostWritePage from "./component/page/PostWritePage";
// 글작성페이지

// page안의 페이지들이 연결된걸 표현해줘야함 => 라우터사용
// 각각의 페이지안에서는 navigator로 경로형태( / )로 연결해줬었음 a태그역할
// -->MainPge안에 navigate("/post-write") 아래 설명참조
import { BrowserRouter,Routes,Route } from "react-router-dom";
// =>리액트를 위한 라우팅 라이브러리 : react-router-dom
// =>각 경로에 따라 다른 컴포넌트를 보여주도록 만들어져 있음
// =>웹사이트에서 라우팅은 사용자가 원하는 경로로 보내는 과정
// =>라우팅을 쉽게 구현할 수 있도록 리액트 컴포넌트 형태로 작성이 되도록 하는 라이브러리
// =>react-router-dom을 이용해서 라우팅을 할 수 있게 하는 컴포넌트(컴포넌트형식이라 첫글자 대문자) 총 3가지
// 이 3가지 내가 지정하는게 아니고 리액트에서 이미 지정되어져있는것들임

// 1. BrowserRouter 컴포넌트
// -> 웹브라우저에서 react-router를 사용해서 라우팅을 할 수 있도록 해줌
// -> 이걸로 여러페이지를 둘러싸야함
// -> 웹브라우저에서 history를 이용 경로를 탐색할 수 있게 해주는 컴포넌트
// -> Routes의 부모영역임

// 2. Routes 컴포넌트
// -> 실제로 라우팅 경로를 구성 할 수 있게 하는 컴포넌트
// -> Route의 상위컴포넌트
// -> Routes는 여러개의 Route를 children으로 가짐

// 3. Route 컴포넌트
// -> 실제로 라우팅 경로를 구성 할 수 있게 하는 컴포넌트
// -> Routes의 하위 컴포넌트로 Path(경로), element(요소)라는 props를 가짐
// -> element : 경로가 일치할 경우 랜더링을 할 리액트 요소
// 사용자가 주소창에 새로운 경로를 입력하거나 웹사이트 내에서 경로 이동이 일어나면 
// Routes 컴포넌트는 하위 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 경로를 찾아
// 해당하는 element를 보여줌

// 서버에게 이거 보여줘. 서버가 오케이 보여주께 =>대화 ==>API 대화틀이라고 생각

const MainTilteText = styled.p`
  font-size:24px;
  font-weight:bold;
  text-align:center;
`;

function App(props) {

  return (
    <BrowserRouter>
     <MainTilteText>블로그 제목</MainTilteText>
      <Routes>
        <Route index element={<MainPage/>}/>
        {/* index => 처음보여지는 페이지이므로 넣어줌
        =>path없이 index라는 props를 가진 Route로 라우팅됨
        =>메인 첫번째 페이지로 설정한겨 */}
        <Route path="post-write" element={<PostWritePage/>}/>
        {/* =>하위 컴포넌트(MainPage)에서 path로 설정한 경로를
        Route의 path로 설정해서 해당 element컴포넌트로 이동시킴 */}
        <Route path="post/:postId" element={<PostViewPage/>}/>
        {/* => postId는 동적으로 변하는 파라미터를 위한 값
        =>경로에 : (콜론)을 사용하고 ID를 입력하면 실제 컴포넌트에서
        useParams() 훅을 사용해 아이디를 해당 값으로 가지고 옴 */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
