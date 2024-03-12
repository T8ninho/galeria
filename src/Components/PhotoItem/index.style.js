import styled from "styled-components";

export const Container = styled.button`
    border-color: transparent;
    border-radius: 10px;
    padding: 5px;

    :nth-child(odd) {
        background: linear-gradient(-229deg, #fbd52d, #ef3a2b);
        border-color: #fbd52d;
    }
    :nth-child(even) {
        background: linear-gradient(-229deg, #ff70af, #5fabf5);
        border-color: #ff70af;
    }
    div {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
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


