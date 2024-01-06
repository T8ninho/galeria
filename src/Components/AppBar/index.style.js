import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    background:  ${Theme.text.quintenary};
    box-shadow: 0 1px 15px 0 rgba(255,255,255,0.7);
    backdrop-filter: blur(5px);
    border-color: rgba(255,255,255,0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;

.logo {
    padding: 15px;
    border-radius:7px;
    transition: 
    translate 0.25s,
    box-shadow 0.25s;
}

.logo img {
    width: 65px;
    border-radius:7px;
    
}
.logo:hover {
    translate: 0 -5px ;
}

@media screen and (max-width: 1000px) {
    .list {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .logo img {
        width: 65px;
    border-radius:7px;
    }
}

`

export const Titulo = styled.h1`
    color: ${Theme.text.secondary};
    font-family: cursive;
    font-size: 40px;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }
`;