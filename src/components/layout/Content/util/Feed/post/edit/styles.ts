import styled from "styled-components";
export const EditContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: relative;

    div{
        cursor: pointer;
    }
`


export const ItemEditContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    row-gap: 0.5rem;
    cursor: pointer;
    :hover{
        background-color: var(--blue-hover);
    }
`