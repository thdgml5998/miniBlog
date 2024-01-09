// => CommentListItem의 상위 컴포넌트
// =>리액트문법, styled문법
// =>함수형 컴포넌트
// =>컴포넌트의 상위 매개변수로 comments, onClickItem을 전달

import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : center;
    :not(:last-child){
        margin-bottom : 16px;
    }
`;
// =>div 태그에 추가 선택자 사용 
// not(선택자)=>선택자가 아니면

function CommentList(props){
    const {comments} = props;

    return(
        <Wrapper>
        {comments.map((comment,index)=>{
            return(
                <CommentListItem 
                    key={comment.id} 
                    comment={comment}>
                </CommentListItem>
            );
        })}
        </Wrapper>  
    );
}

export default CommentList;