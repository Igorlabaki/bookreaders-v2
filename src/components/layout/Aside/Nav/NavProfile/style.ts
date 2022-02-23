import styled from "styled-components";

export const PhotoContainer = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60% !important;
    height: 182px !important;
    border-radius: 0.8rem !important;
    margin-left: 3rem;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); 
`

export const NavProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 0.80rem;
    border-top-right-radius: 0.80rem;
    background-color: aliceblue;
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

        span{
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
        }
    }
    
    p{
        display: flex;
        gap: 0.4rem;
    }
`