import styled from "styled-components";
import Theme from "../../Themes";
import ReactModal from "react-modal";
import Background from '../../Images/Background.svg';

export const Container = styled.div`
    background-color: ${Theme.colors.quintenary};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: space-between;
    
`;

export const Area = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 980px;
`;

export const ScreenWarning = styled.div`
    text-align: center;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    box-shadow: rgba(255,255,255,0.7);
    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;

    @media(max-width:1000px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media(max-width:700px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const UploadForm = styled.form`
    background: ${Theme.colors.secondary} url(${Background});
    box-shadow: rgba(255,255,255,0.7);
    border-radius: 10px;
    margin-bottom: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 85vw;

    div {
        display: flex;
        gap: 5px;
    }
`;

export const SelecionarIMG = styled.label`
    background-color: ${Theme.botoes.secondary};
    color: ${Theme.text.secondary};
    font-weight: bold;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
export const EnviarIMG = styled.input`
    background-color: ${Theme.botoes.primary};
    border: 0;
    color: ${Theme.text.secondary};
    font-weight: bold;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
export const CancelarIMG = styled.input`
    background-color: ${Theme.botoes.tertiary};
    border: 0;
    color: ${Theme.text.secondary};
    font-weight: bold;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;

export const ImagePreviewContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    border: #0000005a 3px solid;
    overflow: hidden;
    margin: 10px;
`;
export const ImagePreview = styled.img`
    height: 100%;
`;

export const ModalContainer = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
    height: 100%;
`;

export const ModalAberta = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 8px 32px 0 rgba(14,19,82,1);
`;
export const ModalImagem = styled.img`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    max-height: 90vh;
    max-width: 90vw;
    background-color: ${Theme.colors.bgimage};
`;
export const ModalBotaoClose = styled.button`
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