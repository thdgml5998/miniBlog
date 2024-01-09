import React from "react";
import styled from "styled-components";

// const 삽입태그형식명(변수)=styled.태그명`
//     css 속성명 : 속성값;
//     color:${ 변수명 };
//     color:${ 변수명=> 조건?참:거짓 };
//     color:${ a=> dark?"black":"yellow" };
// `;  
// ==>css


// const Title=styled.h1`
//     font-size:40px;
//     color:red;
//     text-align:center;
// `;

// const But=styled.button`
//     color:${props=>props.dark?"yellow":"dark"};
//     background:${props=>props.dark?"black":"yellow"};
//     border"1px solid pink;
// `;
// =>But라는 이름의 button태그만들고 스타일 지정하기


const But=styled.button`
    padding:8px 16px;
    font-size:17px;
    border:1px solid gray;
    border-radius:8px;
    cursor-pointer;
`;
// =>But라는 이름의 button태그만들고 스타일 지정하기



function Button(props){
    // 하위컴포넌트
    // =>상위컴포넌트의 매개변수(props)값을 할당 받아서 사용할때 정의 방법
    // const {props변수명 삽입,props변수명 삽입,props변수명 삽입}=>props;
    const {title,onClick}=props;

    // =>Button컴포넌트에서 props로 title이 버튼의 내용으로 표시되게함
    // =>onClick은 But에 onClick에 넣어 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
    // =>표기법 중 조건과 관련있는 문장을 바로 삽입하는것(삼항연산자)=> 조건부랜더링
    // ->조건에 따라서 보여지는 화면이 다를때 표기하는 방법
    // ==>회원비회훤일때 사용 

    // function User(props){
    //     return <h1>회원입니다</h1>
    // }
    // function Guest(props){
    //     return <h1>비회원입니다</h1>
    // }
    // function PageV(props){
    //     const isLogIn=props.isLogIn;
    //     if(isLogIn){
    //         return <User/>
    //     }
    //     return <Guest/>
    // }

    return(
        // <div>
        //     <But>기본</But>
        //     <But dark>변경</But>
        // </div>
        <div>
            <But onClick={onClick}>{title||"button"}</But>

            {/* 조건부 랜더링을 줄여서 인라인 표기법으로 사용할때
            =>인라인 if
            {title 논리연산자(&&, ||)}
            && 참,참 => 참값
            || 거짓,거짓 => 거짓값
            ->if가 실제로 삽입되는 것은 아님
            ->결과가 정해져 있는 논리연산에서 굳이 불필요한 연산을 하지 않도록 하기위해 사용
            
            &&(and연산자)->true && ex : ex
                -조건문이 참이면 ex가 결과값
              ->false && ex : false
                -조건문이 거짓이면 false가 결과값

            ||(or연산자)->항상 참일때 사용함

            =>인라인 if~else
            ->삼항 연산자 표기로 작성하는것
            ->{조건문?참:거짓} */}

        </div>
    );
}

export default Button;