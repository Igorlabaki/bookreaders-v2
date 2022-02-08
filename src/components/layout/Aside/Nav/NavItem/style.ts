import styled from "styled-components";

export const NavItemContainer = styled.div`
    margin-bottom: 10%;
    line-height: 1.25rem;
    font-size: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(107, 114, 128, var(--tw-text-opacity));
    cursor: pointer;
    padding: 10px;
    border-radius: 0.35rem;

    :hover{
        --tw-bg-opacity: 1;
        background-color: rgba(239, 246, 255, var(--tw-bg-opacity));
    }
    
`