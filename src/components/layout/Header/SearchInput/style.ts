import styled from "styled-components";

export const SerachInputContainer = styled.form`

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
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
        height: 100%;
        padding:10px;
        transition: background-color 0.2s;
        cursor: pointer;

        :hover{
            filter: brightness(1.2);
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