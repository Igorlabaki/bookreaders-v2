import styled from "styled-components";

export const ItemContainer = styled.li`
    cursor: pointer;
    padding: 1rem 3.15rem;
    font-weight: 700;
    transition: background-color 0.3s;

    :hover{
        background-color: var(--blue-hover);
    }
`