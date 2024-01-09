import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* =>실제실행되는 컴포넌트는 아님.
    =>개발모드임
    =>개발시 발생되는 버그를 찾을 수 있게 해주는 컴포넌트
    =>제품모드(사용시)에서는 동작하지 않음 
    =>props가 없고 부모에서 strict모드로 선언이 되면 모든 자식에 대해서 strict모드가 실행됨
    =>컴포넌트가 불안정한 랜더링으로 인한 버그를 찾기 위해서 재랜더링함
    (항상 랜더링을 두번 호출함)
    ==>불필요한 div형식의 부모 태그를 줄일 수 있음 */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
