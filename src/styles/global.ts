import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

    :root{
        --blue-button:       rgba(29, 53, 87);
        --blue-hover:        #cce0ff;
        --dark-gray:         hsl(0, 0%, 59%);
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }

    }

    body{
        background: var (--background);
        -webkit-font-smoothing: antialiased; // deixa os caracteres mais nitidos
    }

    body, input, textarea, button{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    // Modal

    /////Modal Auth
        .react-modal-auth-overlay{
            background-color: rgba(0,0,0,0.5);
            position:fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-auth-content{
            width: 100%;
            max-width: 576px;
            background-color: rgb(235, 229, 228);
            padding: 1.5rem;
            position: relative;
            border-radius: 0.60rem;
        }

    ///////Modal Config
        .react-modal-config-overlay{
            position:absolute !important;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: start;
            justify-content: end;
            z-index: 20;
        }

        .react-modal-config-content{
            width: 100%;
            max-width:180px;
            background-color: white;
            padding: 0;
            top:3.5rem;
            right: 11rem;
            position: absolute !important;
            overflow: hidden;
            border-top-left-radius: 0.60rem;
            border-bottom-right-radius: 0.60rem;
            border-bottom-left-radius: 0.60rem;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
    
    ///////Modal Photo

        .react-modal-photo-overlay{
            position:fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-photo-content{
            width: 100%;
            max-width: 576px;
            background-color: white;
            padding: 1.5rem;
            position: relative;
            border-radius: 0.60rem;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        }

        
    /////Modal Search
    .react-modal-search-overlay{
            background-color: rgba(0,0,0,0.5);
            position:absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .react-modal-search-content{
            width: 100%;
            max-width: 576px;
            background-color: rgb(235, 229, 228);
            padding: 1.5rem;
            position: absolute;
            border-radius: 0.60rem;
        }
        
    ///////////// Google Button Auth
    .google-button{
        background-color: red;
        transition: background-color 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover{
            filter: brightness(1.4);
        }
    }

    // Slider

    //padding das setas
    .swiper-button-next {
        right: 20px;
    }
    .swiper-button-prev {
        left: 20px;
    }

    //cor das setas
    .swiper-button-prev:after, .swiper-button-next:after{
        color: #FFBA08;
    }
  
    //bolinhas de página
    .swiper-pagination-bullet{
        width:10px;
        height:10px;
        background:#999999;
        opacity:1;
    }
  
    //cor da bolinha ativa
    .swiper-pagination-bullet-active{
        background:#FFBA08 ;
    }
  
    //////////////////////Pagination

    .currentPage{
        background-color: #b3e0ff;
    }

`

