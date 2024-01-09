// =>PostListItem의 상위 컴포넌트
// =>리액트문법, styled문법
// =>함수형 컴포넌트
// =>컴포넌트의 상위 매개변수로 posts, onClickItem을 전달
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

function PostList(props){
    const {posts, onClickItem} = props;
    // =>PostList컴포넌트의 props로 받은 posts안에는 post객체를 넘겨받음
    // =>이 post객체들은 posts 의 배열값으로 인식 
    // =>map함수 활용하여 post객체에 포함되는 PostListItem 컴포넌트를 읽어옴 

    return(
        <Wrapper>
            {posts.map((post,index)=>{
                // =>map함수를 사용글의 개수 만큼 PostListItem 컴포넌트를 만들기위해 사용
                // ==>내가 서버에 새로운거 올리면 타이틀이 여러개 생기니까 
                //    타이틀이 생기는 만큼 아이템을 불러오라는 것
                return(
                    <PostListItem 
                        key={post.id} 
                        post={post} 
                        onClick={()=>{
                                onClickItem(post);
                            }
                        }>
                    </PostListItem>
                );
            })}
        </Wrapper>
    );
}

export default PostList;