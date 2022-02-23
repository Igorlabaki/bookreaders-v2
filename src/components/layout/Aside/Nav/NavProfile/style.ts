import styled from "styled-components";

export const PhotoContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:0.5rem;
    
    img{
        width:  150px;
        height: 150px;
        cursor: pointer;
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
    gap: 0.8rem;
    font-size: 1.2rem;
    font-weight: 700;

    div{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    
    p{
        display: flex;
        gap: 0.4rem;
    }
`