import styled from "styled-components";
import Theme from "../../Themes";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background: rgba(255,255,255,0.027);
    box-shadow: 0 8px 32px 0 rgba(14,19,82,037);
    backdrop-filter: blur(5px);
    border-bottom-style: double;
    border-color: rgba(255,255,255,0.3);
    

    .container {
    max-width: 80vw;
    margin: 0 auto;
}
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar a {
    text-decoration: none;
    color: #fff;
}
.logo {
    
    padding: 15px;
}

.logo img {
    width: 65px;
    border-radius:7px;
    
}
.logo {
    border-radius:7px;
    transition: 
        translate 0.25s,
        box-shadow 0.25s;
}
.logo:hover {
    translate: 0 -5px ;
}
@media screen and (max-width: 1000px) {
    .menu {
        width: 100vw;
        max-height: 0;
        overflow: hidden;
    }
    .navbar {
        flex-wrap: wrap;
    }
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
    color: ${Theme.text.primary};
    font-family: cursive;
    font-size: 40px;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
    }
`;