import styled from "styled-components";

export const NavItemContainer = styled.div`
    display: flex;
    justify-content:start;
    align-items:center;
    gap:1rem;
    cursor: pointer;
    line-height: 1.25rem;
    font-size: 1.3rem;
    transition: background-color 0.3s;
    padding: 1.5rem;

    :hover{
        background-color: aliceblue;
    }

    :first-child{
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    :last-child{
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        padding-bottom: 37px;
    }
`