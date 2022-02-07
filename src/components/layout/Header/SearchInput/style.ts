import styled from "styled-components";

export const SerachInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    border: 1px solid black;
    border-radius: 0.25rem;
    width: 30%;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(29, 78, 216);
        height: 100%;
        padding:5px;
        transition: background-color 0.2s;
        cursor: pointer;

        :hover{
            background-color: rgba(147, 197, 253);
        }
    }

    input{
        flex: 1;
        font-size: 1rem;
        height: 1rem;
        border: 0;
        padding-left: 5px;

        :focus{
            outline: none;
        }
    }
`