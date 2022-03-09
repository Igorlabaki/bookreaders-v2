import styled from "styled-components";

export const ContainerExternal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    background: rgba( 0, 0, 0, 0 );

    top:0px;
    left: 0px;

    z-index: 20;

    display: flex;
`
export const ContainerInternal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow:hidden;
    
    background: white;

    width: 140px;
    top:    10px;
    right:-42px ;

    border: none;
    border-top-left-radius: 0.60rem;
    border-bottom-left-radius: 0.60rem;
    border-bottom-right-radius: 0.60rem;
    margin-right: 57px;

    position: absolute;
    z-index: 300;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`