// =>리액트문법, styled문법
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : calc(100% - 35px);
    padding : 16px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border : 1px solid gray;
    border-radius : 5px;
    cursor : pointer;
    background : pink;

    :hover {
        background: yellow;
    }
    
`;
// =>div 태그에 추가 선택자 사용


// =>Wrapper의 자식
const TitleText = styled.p`
    font-size : 20px;
    font-weight : 500;
`;


// =>함수형 컴포넌트
// =>글의 제목 영역
function PostListItem(props){
    // =>post,onClick을 매개변수로 전달
    const {post, onClick} = props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>
                {post.title}
                {/* =>props로 받은 post객체에 들어있는 title문자열을 표시 */}
            </TitleText>
        </Wrapper>
    );
}

export default PostListItem;