import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    padding: 0 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
    
    
    img{
        width: 100px;
        height: 150px;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
`

export const BookContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
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

export const UserReviewContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 5rem;
    font-weight: 700;

    p{
        cursor: pointer;
        color:var(--blue-button);
        :hover{
            text-decoration: underline;
            filter: brightness(1.4);
        }
    }

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
        :hover{
            filter: brightness(1.4);
        }

        span{
            margin-top: 2px;
        }
    }
`

export const UserRatingContainer = styled.form`
    display: flex;
    gap: 0.2rem;
    font-size: 20px;

    span{
        cursor: pointer;
        color: rgb(189, 191, 190);
        :hover{
            color:rgb(242, 189, 15);
        }
    }
`