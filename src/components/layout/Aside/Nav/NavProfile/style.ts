import styled from "styled-components";

export const PhotoContainer = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 230px !important;
    border-radius: 0.8rem !important;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); 
`

export const NavProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 0.80rem;
    border-top-right-radius: 0.80rem;
    background-color: aliceblue;


    h4{
        text-align: center;
        padding: 0.55rem;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    gap: 0.7rem;
    padding: 0.6rem;
`

export const IconContainer = styled.div`
    cursor: pointer;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`