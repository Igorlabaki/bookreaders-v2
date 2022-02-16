import styled from "styled-components";

export const ContainerAside = styled.div`
    width: 20%;
    min-width:20% ;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;

    img{
        width: 150px;
        border-radius: 50%;
    }

    p{
        display: flex;
        justify-content:center;
        cursor:pointer;
    }
`

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