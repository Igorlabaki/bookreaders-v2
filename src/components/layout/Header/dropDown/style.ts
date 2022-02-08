import styled from "styled-components";

export const DropDowContainer = styled.div`
    position: absolute;
    bottom: -100px;
    right: 10px;
    background-color: white;
    border-bottom-left-radius:  0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-top-left-radius:    0.25rem;
    padding: 2rem 1rem;
    box-shadow: 2px 2px 2px 2px #7D7D7D;
    overflow: auto;

    ul{
        list-style-type: none;
    }

    li{
        padding: 5px;
        :hover{
        --tw-bg-opacity: 1;
        background-color: rgba(239, 246, 255, var(--tw-bg-opacity));
        }
    }

    button{
       border-radius: 1rem;
       padding: 5px;
       font-size: 1.1rem;
   }
`