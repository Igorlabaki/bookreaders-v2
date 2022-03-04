import styled from "styled-components";


export const PostBookContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    width: 100%;
    gap: 1rem;

    div{
        display: flex;
        flex-direction:column;
        gap: 0.5rem;
        width: 100%;
    }

    img{
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        height: 175px;
        cursor: pointer;
    }

    span{
        display: flex;
        flex-direction: row;
        gap:1rem;
    }

    h3{
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
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