import styled from "styled-components";

export const Container = styled.button`
    border-color: transparent;
    border-radius: 10px;
    padding: 1px;
    background: linear-gradient(-229deg, #00ff00, #00ff95);
    cursor: pointer;
    
    div {
        width: calc(100vw / 6 - 30px);
        height: calc(100vw / 6 - 30px);
        border-radius: 10px;
        overflow: hidden;

        @media(max-width:1000px) {
            width: calc(100vw / 4 - 30px);
            height: calc(100vw / 4 - 30px);
        }
        @media(max-width:700px) {
            width: calc(100vw / 3 - 30px);
            height: calc(100vw / 3 - 30px);
        }
    }
    
    img {
        background-color: #fff;
        width: 100%;
        height: 100%;
        object-fit: cover;
    } 
    img:hover{
        transform:  scale(1.1);
        transition: .2s;
    }
    
`;


