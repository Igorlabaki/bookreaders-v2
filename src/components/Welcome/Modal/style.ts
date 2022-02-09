import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: green;

    .react-modal-overlay{
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

        .react-modal-content{
            width: 100%;
            max-width: 576px;
            background-color: rgb(235, 229, 228);
            padding: 1.5rem;
            position: relative;
            border-radius: 0.60rem;
        }
`