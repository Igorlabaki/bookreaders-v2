import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

    :root{
        --blue-button:       rgba(29, 78, 216);
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
            background-color: transparent;
            top: 50px;
            right: 180px;
            position: fixed;
        }

        .react-modal-config-content{
            width: 100%;
            max-width: 576px;
            background-color: white;
            padding: 0;
            overflow: hidden;
            border-top-left-radius: 0.60rem;
            border-bottom-right-radius: 0.60rem;
            border-bottom-left-radius: 0.60rem;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        }
        
    ///////////// Google Button Auth
    .google-button{
        background-color: red;
        transition: background-color 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;

        :hover{
            background-color:#ff4d4d
        }
    }
`