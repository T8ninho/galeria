import styled from "styled-components";

export const Container = styled.button`
    border-color: transparent;
    transition: transform 0.5s;
    border-radius: 8px;
    padding: 5px;

    :nth-child(odd) {
        background: linear-gradient(-229deg, #fbd52d, #ef3a2b);
    }
    :nth-child(even) {
        background: linear-gradient(-229deg, #ff70af, #5fabf5);
    }
    :hover{
        transform:  scale(1.1);
    }
    img {
        width: 300px;
        height: 300px;
        border-radius: 7px;
        border-style: double;
        border-color: #fff;
        background: #fff;
        object-fit: cover;
        object-position: center;
        transition: 
        translate 0.25s,
        box-shadow 0.25s;
        display: flex;
    } 
    @media(max-width:600px) {
        flex-direction: column;
        
        img {
            width: calc(90vw / 2);
            height: calc(90vw / 2);
        }
    }
    
`;


