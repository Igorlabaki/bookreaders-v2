import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:1rem;
    }

    textarea{
        width: 100%;
        height: 130px;
        background-color: rgba(229, 231, 235,1);
        font-size: 1rem;
        padding: 1rem;
        outline:none;
        border: 0;
    }

    img{
        width: 300px;
    }

    button{
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        background-color: var(--blue-button);
        color: wheat;
        padding: 1rem;
        border-radius: 0.80rem;
        transition: filter 0.3s;
        width: 100px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        :hover{
            filter: brightness(1.4);
        }
    }
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const CheckBoxContainer = styled.div`
    width: 100%;
    display: flex !important;;
    flex-direction: row !important;
    justify-content: flex-start;
    align-items: flex-start;
`