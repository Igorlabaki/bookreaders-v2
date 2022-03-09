import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    img{
        width: 250px;
        height: 350px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
`

export const BookContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    
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
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        :hover{
            filter: brightness(1.4);
        }

        span{
            margin-top: 2px;
        }
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;

    div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        text-align: justify;
    }
`

export const AuthorBookContainer = styled.div`
    display:flex ;
    flex-direction:row !important;
    gap: 2rem ;
    max-width: 1190px ;
    overflow: auto;
    
    div{
        display:flex ;
        justify-content:center !important;
        align-items: center !important;
        flex-direction: column ;
        gap: 1rem;
        cursor: pointer;
        text-align:center ;

        img{
            width: 150px ;
            height: 200px ;
        }
    }

`

export const AddBookContainer = styled.div`
    display:flex ;
    flex-direction:row !important;
    align-items: center ;
    justify-content: space-between ;
`