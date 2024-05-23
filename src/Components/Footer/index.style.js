import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    background: linear-gradient(to right, #ff0000, #0000ff, #00ff00, #ff0000, #00ff00);
    position: static;
    bottom: 0;
    width: 100%;
`;

export const Area = styled.div`
    color: ${Theme.text.primary};
    margin: auto;
    background: #ffffff4c;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;
    text-align: center;

    
    d {
        color: #ff0000
    }
    p {
        padding-right: 5px;
    }

    a {
        text-decoration: none;
        color: ${Theme.text.primary};
        border-bottom: 2px dotted #000;
    }
`;