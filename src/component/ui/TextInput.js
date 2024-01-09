// =>사용자가 텍스트를 입력할 수 있게 해주는 컴포넌트
import React from "react";
import styled from "styled-components";

// const TextArea = styled.textarea`
//     width : calc(100% - 35px);
//     height : 500px;
//     padding : 20px;
//     font-size : 18px;
//     line-height : 22px;
// `;

// 글 내용에 따라서 높이값이 다르게 나와야함. 그래서 위에꺼 말고 아래껄로
// 인라인 인풋태그 활용해서 유동값의 높이값 받아와야한다
// ==> 상위 컴포넌트에서 지정한 props값으로 스타일을 다르게 인식시키기

const TextArea = styled.textarea`
    width : calc(100% - 35px);
    ${
        (props)=>
            props.height && `height:${props.height}px;`
        
    }
    padding : 20px;
    font-size : 18px;
    line-height : 22px;
`;
//=> (props)=>
//     props.height && `height:${props.height}px;`
// return이 없으므로 {} 없애기




function TextInput(props){
    const {height,value,onChange}=props;
    // =>TextInput컴포넌트의 props로 value(입력값표기)
    // =>onChange(변경된값 상위컴포넌트로 전달)지정

    return(
        <div>
            <TextArea height={height} value={value} onChange={onChange}></TextArea>
        </div>
    );
}

export default TextInput;