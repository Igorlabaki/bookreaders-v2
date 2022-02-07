import styled from 'styled-components'

export const Container = styled.div`
    height:100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('images/photos/home-page.jpeg');
    background-position: center; 
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

export const ContainerIntroText = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    h1{
        font-size: 2.7rem;
    }

    div{
        margin-top: 4rem;
    }

    p{
        font-size: 1.5rem;
    }
`


export const ContainerSocialLinks = styled.div`
   font-size: 1.2rem;
   position: absolute;
   bottom: 0;
   left: 5px;

    p{
        color: white;
        font-weight: 600;
    }

    div{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`