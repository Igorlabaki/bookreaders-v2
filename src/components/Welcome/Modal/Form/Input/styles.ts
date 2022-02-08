import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-weight: 700;
        font-size: 1.05rem;
        color:rgba(75, 85, 99);
        margin-bottom: 10px;
    }

    input{
        outline: none;
        border: none;
        border-radius:0.25rem;
        line-height: 2rem;
        font-size: 1.1rem;
        margin-bottom: 20px;
        padding: 10px 20px;
        :focus{
            background-color: rgba(219, 234, 254);
        }
    }
`