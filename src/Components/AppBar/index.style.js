import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    background:  ${Theme.colors.quaternary};
    box-shadow: 0 1px 15px 0 rgba(255,255,255,0.7);
    backdrop-filter: blur(3px);
    border-color: rgba(255,255,255,0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 80px;

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
    .logo img {
        width: 50px;
    border-radius:7px;
    }
}

`

export const Titulo = styled.h1`
    color: ${Theme.text.secondary};
    font-family: cursive;
    font-size: 30px;
    text-shadow: #000 0 0 6px;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }
`;