import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

    textarea{
        width: 100%;
        background-color: rgba(229, 231, 235,1);
        padding: 1rem;
        outline:none;
        border: 0;
    }

    p{
        cursor: pointer;
        display: flex;
        justify-content:end;
        margin-top: 1rem;

        :hover{
            font-weight: 600;
            color:rgba(29, 78, 216);
        }
    }

`