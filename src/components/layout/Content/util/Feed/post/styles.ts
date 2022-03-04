import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const PostContent = styled.div`
    display:flex ;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.2rem;

    span{
        font-size: 0.9rem;
        color: gray;
    }
`
export const Photo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`



export const PostTextContainer = styled.div`
    width: 100%;
    border-top-right-radius: 0.80rem;
    border-bottom-right-radius: 0.80rem;
    border-bottom-left-radius: 0.80rem;
    padding: 1.5rem;
    background-color: var(--blue-hover);
    font-weight: 700;
`