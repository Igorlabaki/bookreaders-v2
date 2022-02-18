import styled from "styled-components";

export const ButtonContainer = styled.button`
    color: white;
    border-radius: 0.55rem;
    padding:10px;
    font-size: 1.25rem;
    border:0;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: var(--blue-button);
    transition: background-color 400ms;
    margin-bottom: 5px;
    transition: filter 0.3s;
    
    :hover{
        filter: brightness(1.4);
    }

    p{
        margin-right: 5px;
    }
`

