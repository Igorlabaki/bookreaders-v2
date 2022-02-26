import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;

    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`

export const Photo = styled.div`
    display: flex;
    gap: 100rem; 
`

export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    

    i{
        margin-left: 25px;
        color: rgb(219, 101, 129);
        cursor: pointer;
    }
    
    span{
        font-size: 0.8rem;
        color: gray;
        
    }
    div{
        border-top-right-radius: 0.80rem;
        border-bottom-right-radius: 0.80rem;
        border-bottom-left-radius: 0.80rem;
        padding: 1.5rem;
        background-color: var(--blue-hover);
        font-weight: 700;
    }
`

export const PostBookContainer = styled.div`
`