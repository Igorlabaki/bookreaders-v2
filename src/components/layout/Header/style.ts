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

export const ArrowButtonContainer = styled.div`
    margin-top: 10px;
    cursor: pointer;
    border: 0;
    background-color: transparent;
`