import styled from "styled-components";

export const ModalContainer = styled.div`
 
`

export const ButtonContainer = styled.button`
        font-size: 1.1rem;
        color:rgba(125, 124, 124);
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background:transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.4);
        }
`

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 1.5rem;

    h2{
        color: var(--blue-button);
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        div{
            position: relative;
            width: 100%;
            height: 50px;
            cursor: pointer;
            

            input{
                position: relative;
                max-width: 200px;
                height: 46px;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
            }

            span{
            position: absolute;
            top: 0;
            right: 65px;
            color: var(--blue-button);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            z-index: 1;
            cursor: pointer;    
                :hover{
                    font-weight: 700;
                    filter: brightness(1.4);
                }
            }

            p{
                margin-top: 5px;
            }
        }

        button{
            right: 0;
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
            width: 300px;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
            :hover{
                filter: brightness(1.4);
            }
        }
    }

`

export const PhotoContainer = styled.img`
    height: 150px;
`