import styled from "styled-components";

export const PaginationContainer = styled.ul`
    display:flex ;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-weight: 700;
    color: var(--blue-button);
    cursor: pointer;
    gap: 0.2rem;

    li{
        border: 1px solid;
        padding: 0.5rem;
        transition: filter 0.5s;
        transition:  background-color 0.2s;

        :hover{
            filter: brightness(0.8);
            background-color: var(--blue-hover);
        }
    }

`

export const ButtonArrow = styled.button`
    color: var(--blue-button);
    font-weight: 700;
    border: 0;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;

    :hover{
        filter: brightness(0.8);
        background-color: var(--blue-hover);
    }
`