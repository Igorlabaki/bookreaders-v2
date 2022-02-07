import styled from "styled-components";

export const FormContainer = styled.form`
    h1{
        --tw-text-opacity: 1;
        color: rgba(29, 78, 216, var(--tw-text-opacity));
        font-size: 1.5rem;
        font-weight: 700;
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

    form{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        label{
            font-size: 1.2rem;
            font-weight: 700;
            color:rgba(75, 85, 99)
        }
        input{
            outline: none;
        }
    }
`