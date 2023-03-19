import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    display: flex;
    border-color: transparent;
    border-left: 0;
    border-right: 0;
    
    
    header {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        transition: transform 0.5s;
        border-radius: 8px;
    }
    a {
        display: flex;
        border-radius: 7px;
    }
    header:hover{
        transform:  scale(1.1);
    }
    img {
        width: 300px;
        height: 300px;
        border-radius: 7px;
        border-style: double;
        border-color: #fff;
        object-fit: cover;
        object-position: center;
        transition: 
        translate 0.25s,
        box-shadow 0.25s;
        display: flex;
    } 
    @media(max-width:600px) {
        max-width: 50%;
        flex-direction: column;
        
    img {
        width: calc(90vw / 2);
        height: calc(90vw / 2);
    }
    header:hover{
        transform:  none;
    }
    }
    
`;


