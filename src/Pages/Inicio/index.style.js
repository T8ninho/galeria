import styled from "styled-components";
import Theme from "../../Themes";
import ReactModal from "react-modal";

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
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    @media(max-width:1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const UploadForm = styled.form`
    background-color: ${Theme.colors.secondary};
    box-shadow: rgba(255,255,255,0.7);
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
            opacity: .5;
        }
    }
`;

export const ModalContainer = styled(ReactModal)`
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: '#000';
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