import styled from "styled-components";

export const ItemContainer = styled.li`
    cursor: pointer;
    padding: 1rem;
    font-weight: 700;
    transition: background-color 0.3s;
    
    :hover{
        background-color: var(--blue-hover);
    }
    
    p{
        display: flex;
        justify-content:flex-start;
        align-items:center;
        gap:0.75rem;
        width: 100%;
    }
`