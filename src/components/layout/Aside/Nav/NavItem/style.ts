import styled from "styled-components";

export const NavItemContainer = styled.div`
    line-height: 1.25rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s;
    padding: 1.5rem;

    :hover{
        background-color: var(--blue-hover);
    }

    :first-child{
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    :last-child{
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`