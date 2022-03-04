import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

`

export const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export const MyBookContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 15px;

`

export const PhotoContainer = styled.img`
    height: 200px;
    width: 150px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

`

export const StaticsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        gap: 0.3rem;
    }
`