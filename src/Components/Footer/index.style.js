import styled from "styled-components";
import Theme from "../../Themes";
import BackgroundImage from '../../Images/lava.webp'

export const Container = styled.div`
    margin-top: 30px;
    height: 150px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: url(${BackgroundImage});
    background-color: rgb(255, 69, 0);
    box-shadow: 0 0 32px 8px rgba(255, 69, 0, 1);
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
    font-weight: bold;
    background-color: rgba(255, 69, 0, 0.5);
    text-align: center;
    
    a {
        text-decoration: none;
        color: #252525;
        border-bottom-color: #fff;
        border-bottom: 1px;
        border-bottom-style: solid;
        padding-left: 10px;
        padding-right: 10px;
    }
`;