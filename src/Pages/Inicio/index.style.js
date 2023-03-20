import styled from "styled-components";
import Theme from "../../Themes";
import ReactModal from "react-modal";
import BackgroundImage from '../../Images/img.png';
import uploadIMG from '../../Images/portal.webp';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: ${Theme.colors.quintenary};
    background-image: url(${BackgroundImage});
    
`;

export const Area = styled.div`
    padding-top: 30px;
    margin: auto;
    max-width: 980px;
`;
export const ContainerTitulo = styled.div`
    margin: auto;
    max-width: 980px;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    background-image: url(${uploadIMG});
    box-shadow: 0 0 32px 8px rgba(14,19,82,037);
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media(max-width:600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2px;
    } 
`;

export const UploadForm = styled.form`
    background-color: ${Theme.colors.secondary};
    box-shadow: 0 0 32px 8px rgba(14,19,82,037);
    background-image: url(${uploadIMG});
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;

    input[type=submit] {
        background-color: ${Theme.botoes.primary};
        border: 0;
        color: ${Theme.botoes.secondary};
        font-weight: bold;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;

        &:hover {
            opacity: .9;
        }
    }
`;

export const ImagemContainer = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    height: 100%;
`;

export const ImagemAberta = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 8px 32px 0 rgba(14,19,82,1);
`;
export const Imagem = styled.img`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    max-height: 90vh;
    max-width: 90vw;
    background-color: ${Theme.colors.bgimage};
`;
export const BotaoClose = styled.button`
    background-color: ${Theme.botoes.primary};
    font-size: 20px;
    font-weight: bold;
    font-stretch: expanded;
    border-color: ${Theme.botoes.tertiary};
    border-style: dotted;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 10px;
    
`;