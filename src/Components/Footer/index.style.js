import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    margin-top: 30px;
    height: 150px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${Theme.colors.secondary};
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const Area = styled.div`
    color: ${Theme.text.primary};
    margin: auto;
    max-width: 980px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    font-weight: bold;
    text-align: center;
    
    a {
        text-decoration: none;
        color: ${Theme.text.primary};
        border-bottom-color: #fff;
        border-bottom: 1px;
        border-bottom-style: solid;
        padding-left: 10px;
        padding-right: 10px;
    }
`;