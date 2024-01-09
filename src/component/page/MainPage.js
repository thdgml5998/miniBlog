import { useNavigate } from "react-router-dom";
//=>react-router-dom : 리액트에서 페이지간 이동을 하기위해 사용하는것
// ->1. a태그
// - html에서의 기본 태그
// - 기본태그이기 때문에 import할 필요 없이 사용함
// - 리액트에서 잘 사용하지 않음
// - 이유 ==> 페이지의 전체를 로드함 ==> 속도저하
// - 리액트에서 외부 프로젝트와의 연결을 위해 사용함
// - Link랑 useNavigate는 리액트 내부에서 연결할때 사용
// - a태그 사용하면 useRef, useState 훅이라는 개념을 사용할 수 없다
// - useRef, useState등에서 수정을 해둔 변수, 상태값을 유지할 수 없다
// - ref에서 #이 들어가면 라우터 사용에 방해가 됨
// -----> 외부프로젝트 연결시에만 사용한다고 보면됨

// ->2. Link
// - react-router-dom에 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도 저하없이 화면의 전환효과를 줄 수 있음
// - url도 필요한 부분만 건드려서 로드함
// - 클릭시 바로 이동하게 하기위한 간단한 동작시 주로 사용함

// ->3. useNavigate
// - react-router-dom에 포함된 기능
// - url에 영향을 주며 필요한 부분만 로드함
// - useRef, useState등을 유지하면서 속도 저하없이 화면의 전환효과를 줄 수 있음
// - url도 필요한 부분만 건드려서 로드함
// - 특정 이벤트가 실행되었을때 이동하거나, 추가적인 동작이 필요한 경우
// - 필요한 내용을 모두 채워야 이동을 하거나,
// - 상세페이지 열기를 위해서 상품의 정보를 추가로 로드할때

// 클래스 컴포넌트에서는 생명주기 함수
// =>render함수
// - return 되는 html형식을 코드를 화면에 그려주는 함수
// - 화면 내용이 변경되어야 할 시점에 자동 호출되는 함수
// =>constructor함수
// - 생명주기 함수에서 가장 먼저 실행되는 함수
// - 초기화 영역 작업
// - 처음에 한번만 호출됨
// =>getDerrivedStateFromProps 함수
// - constructor 함수에서 전달 받은 props를 state로 변경함
// - constructor함수 다음으로 호출
// =>componentDidMount 함수
// - 작성된 함수들 중에 가장 마지막으로 실행
// - render함수가 코드를 화면에 그려 준 후 실행됨
// =>shouldComponentUpdate 함수
// - Component의 변경과정
// 변경,props,statem의 변경시 사용

// 함수형 컴포넌트에서 생명주기 함수 => 훅
// =>기존 존재하는 기능에 끼어들어서 같이 수행되는 형식
// =>훅은 모두 함수명 앞에 use로 시작함
// =>훅이 수행하는 기능에 따라서 이름을 설정하게 되어 있음
// =>useState : 대표적인 훅. 함수형 컴포너넌트에서 state(동적인컴포넌트)를 사용하고 싶을때 지정하는 훅
//  const [변수명,set함수명]=useState(초기값)
//  *state값은 기본적으로 초기값이 있다


import styled from "styled-components";
import PostList from "../list/PostList";
//=>PostList 글 목록을 표시
import Button from "../ui/Button";
//=>글작성 페이지로 이동
import data from "../../data.json";
//=>임의설정 데이터 data.json연결



// function Counter(props){
//     const [count,setCount]=useState(0);
//     // 첫 번째 초기가 0이 된다

//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     );
// }

// =>useEffect(이팩트함수,의존성배열)
// - 사이트이팩트
// - 보통의 사이트이팩트는 부작용의미 : 개발자가 의도치 못한 코드가
// 실행되어 버그 발생시 나타나는 이팩를 의미함
// - 리액트에서 useEffect는 서버에서 데이터를 받아오거나
// 수동으로 DOM을 변경하는 것을 이팩트라 명시함
// - 클래스 컴포넌트의 생명주기 함수들 중에
// componentDidMount, componentDidUpdate, componentWillUnmount
// 위 세가지 기능을 한번에 지정한 훅 명령임
// - 의존성 배열은 생략가능함
// - 이팩트가 의존하고 있는 배열값으로 배열안에 변수중 하나라도 변경이 되면
// 이팩트 함수가 실행됨
// - 생략시 컴포넌트가 업데이트 될때마다 함수를 호출함

// function Counter(props){
//     const [count,setCount]=useState(0);

//     useEffect(()=>{
//         document.title=`총 ${count}번 클릭함`;
//     })
//     // =>useEffect : 브라우저에서 제공한 API를 사용해서 document의 title을 업데이트함
//     // =>document의 title은 브라우저에서 페이지를 열었을때 창에 표시되는 문자열임(크롬 탭에 있는 제목을 의미)

//     return(
//         <div>
//             <p>총 {count}번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     );
// }

const Wrapper = styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Container = styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`;

function MainPage(props){
    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button 
                    title="글 작성하기" 
                    onClick={()=>{
                        navigate("/post-write");
                        //글 작성하는 곳으로 이동. 경로path
                        //navigate("/해당파일명")
                        //경로의 최종적인 확장자(.html)는 안나옴
                    }}>
                </Button>
                <PostList 
                    posts={data} 
                    onClickItem={(item)=>{
                    navigate(`/post/${item.id}`);
                    }}>
                </PostList>
            </Container>
        </Wrapper>
    );
}


export default MainPage;