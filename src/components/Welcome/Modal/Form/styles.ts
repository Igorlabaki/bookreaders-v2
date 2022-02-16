import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: transparent;
    h1{
        color: rgba(29, 78, 216);
        font-size: 1.5rem;
        font-weight: 700;
        font-size: 2rem;
        text-align: start;
        margin-bottom: 50px;
    }

    .close-button{
        font-size: 1.1rem;
        color:rgba(125, 124, 124);
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background:transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.4);
        }
    }

    .redirect-text{
        margin: 10px 5px;
        font-size: 1.05rem;

        button{
            border:0;
            background-color: transparent;
            color: rgba(29, 78, 216);
            font-size: 1.05rem;
            padding-left: 5px;
            transition: font-weight 0.25s;
            
            :hover{
                font-weight: 700;
            }
        }
    }
`

export const ErrorContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    color:rgb(232, 51, 51);;
    font-weight: 700;
    padding: 1rem;
    border-radius: 0.60rem;
    margin-bottom:1rem;
    background-color: #ff9999;
`