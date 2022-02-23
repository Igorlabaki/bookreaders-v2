import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    textarea{
        width: 100%;
        height: 130px;
        background-color: rgba(229, 231, 235,1);
        font-size: 1rem;
        padding: 1rem;
        outline:none;
        border: 0;
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
        :hover{
            filter: brightness(1.4);
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;

            
        div{
            display: flex;
            gap: 1rem;
        }
    }

`

export const BioTextContainer = styled.div`
    background-color: var(--blue-hover);
    color: black;
    font-weight: 700;
    width: 100%;
    height: 130px;
    border-radius: 0.80rem;
    padding: 2em;
`
export const LoadingContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img{
        height: 50px;
    }
`