import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;

    img{
        width: 16%;
    }

    div{
        display: flex;
        flex: 1;
        justify-content: end;
        align-items: start;
    }

    button{
        & + button{
            margin-left: 1rem;
        }

        :hover{
            --tw-text-opacity: 1;
            color: rgba(147, 197, 253, var(--tw-text-opacity))
        }
    }
`