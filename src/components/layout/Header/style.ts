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
        justify-content: center;
        align-items: center;
    }

    p{
        margin-right: 10px;
    }

    button{
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    img{
        width:3rem;
        border-radius:50%;
    }
`