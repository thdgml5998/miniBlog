import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
//import data from "../../data.json";


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



function PostWritePage(props){
    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    // => 글의 제목을 위한 state
    const [content,setContent] = useState("");
    // => 글의 내용을 위한 state
    
    // useState 훅을 이용 타이틀이랑 컨텐트 훅 두개만든이유
    // =>실제로 사용하는 컴포넌트는 TextInput으로 동일함
    // 그러나 제목과 내용은 각자 입력을 받아야 하기때문에 두개 따로해야한다
    
    return(
        <Wrapper>
            <Container>
                <TextInput height={30} value={title} onChange={(event)=>{
                    setTitle(event.target.value);
                }}></TextInput>
                {/* 제목영역 */}

                <TextInput height={500} value={content} onChange={(event)=>{
                    setContent(event.target.value);
                }}></TextInput>
                {/* 내용영역 */}
                <Button title="글 작성하기" onClick={()=>{
                    navigate("/");
                    // 원래 글작성하기버튼 클릭하면 해당 페이지로 이동해야하는데
                    // DB가 없기때문에 메인으로 이동시킴
                }}/>
            </Container>
        </Wrapper>
    );
}


export default PostWritePage;