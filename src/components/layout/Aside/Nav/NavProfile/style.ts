import styled from "styled-components";

export const PhotoContainer = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 230px;
    border-radius: 0.8rem !important;
    cursor: pointer;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); 
    opacity: 1;
    display: block;
    height: auto  !important;;
    transition: .5s ease;
    backface-visibility: hidden;
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
    position: relative ;


    h4{
        text-align: center;
        padding: 0.55rem;
    }

    :hover img {
        opacity: 0.3;
    }

    hover div {
        opacity: 1;
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


export const TextContainer = styled.div`
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
`

export const MiddleContainer = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%)
`