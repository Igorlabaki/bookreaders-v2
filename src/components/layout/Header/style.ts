import styled from "styled-components";

export const HeaderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h1{
        cursor:pointer;
        font-family: 'Lora', serif;;
    }

    div{
        display: flex;
    }

    p{
        margin-right: 10px;
    }
`

export const LogoContainer = styled.img`
   cursor: pointer;
    width: 200px;
`

export const ArrowButtonContainer = styled.div`
    margin-top: 10px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
`

export const PhotoContainer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`