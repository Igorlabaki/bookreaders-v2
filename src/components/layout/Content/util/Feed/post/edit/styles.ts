import styled from "styled-components";
export const EditContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
`


export const ItemEditContainer = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    row-gap: 0.5rem;
    :hover{
        background-color: var(--blue-hover);
    }
`