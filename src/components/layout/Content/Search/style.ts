import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    img{
        width: 250px;
        height: 350px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
`

export const BookContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const TextContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;

    div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        text-align: justify;
    }
`