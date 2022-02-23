import styled from "styled-components";

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0.5rem;

    button{
        border: 0;
        background-color:transparent;
        font-size:1rem; 
        :hover{
            font-weight: 600;
            color:rgba(29, 78, 216);
        }
    }
`

export const NavProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    color: var(--blue-button);

    p{
        display: flex;
        gap: 0.4rem;
    }
`