import styled from "styled-components";

export const Container = styled.button`
    border-color: transparent;
    border-radius: 10px;
    padding: 2px;
    background: linear-gradient(-229deg, #00ff00, #00ff95);
    border-color: #000;
    cursor: pointer;

    /* :nth-child(odd) {
        background: linear-gradient(-229deg, #fbd52d, #ef3a2b);
        border-color: #fbd52d;
    }
    :nth-child(even) {
        background: linear-gradient(-229deg, #ff70af, #5fabf5);
        border-color: #ff70af;
    } */
    div {
        width: calc(100vw / 6 - 30px);
        height: calc(100vw / 6 - 30px);
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

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
        height: 100%;
        display: block;
	    transition: .2s;
    } 
    img:hover{
        transform:  scale(1.1);
        transition: .2s;
    }
    
`;


