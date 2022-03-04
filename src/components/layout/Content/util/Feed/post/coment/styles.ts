import styled from "styled-components";

export const ButtonComent = styled.button`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: var(--blue-button);
    color: wheat;
    padding: 1rem;
    border-radius: 0.80rem;
    transition: filter 0.3s;
    width: 100px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    :hover{
        filter: brightness(1.4);
    }
`

export const ComentContainer = styled.div`
    border-top-right-radius: 0.80rem;
    border-bottom-right-radius: 0.80rem;
    border-bottom-left-radius: 0.80rem;
    padding: 1.5rem;
    background-color:rgb(188, 252, 179);
    font-weight: 700;
    width: 100%;
`

export const ComentBody = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

export const Photo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

export const CommentButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`