import React, { useState, useEffect } from "react";
import Appbar from "../../Components/AppBar";
import Footer from "../../Components/Footer";
import PhotoItem from "../../Components/PhotoItem";
import {EnviarFoto} from '../../libs/EnviarFoto';
import * as C from './index.style';
import { collection, getDocs } from "firebase/firestore";
import { BancoImage, db } from "../../libs/firebase";

export default function Inicio() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [ImageATV, setImageATV] = useState(null);
    const [ModalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        const ReceberImagens = async () => {
            setLoading(true);
            const querySnapshot = await getDocs(collection(db, BancoImage));
            const ImagemList = querySnapshot.docs.map(doc => ({ id: doc.key, ...doc.data() }));
            
            setPhotos(ImagemList.sort((a, b) => b.date - a.date));
            setLoading(false);
        };
        ReceberImagens();
        
    }, []);

    useEffect(() => {
        if (ModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [ModalOpen]);

    

    function AbrirImagem(Imagem) {
        setImageATV(Imagem)
        setModalOpen(true)
    }

    const handleUpload = (uploadedAudios) => {
        setPhotos(prevAudios => [...prevAudios, ...uploadedAudios]);
      };

    return (
        <C.Container>
            {!ModalOpen &&
                <Appbar />
            }

            <C.Area>
                <C.ModalContainer isOpen={ModalOpen} >
                    <C.ModalAberta>
                        <C.ModalImagem src={ImageATV} />
                        <C.ModalBotaoClose onClick={() => setModalOpen(false)}>
                            Fechar imagem
                        </C.ModalBotaoClose>
                    </C.ModalAberta>
                </C.ModalContainer>
                
                <EnviarFoto onUpload={handleUpload}/>

                {loading &&
                    <C.ScreenWarning>
                        <div className='emoji'>😆</div>
                        <div>Carregando...</div>
                    </C.ScreenWarning>
                }

                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item, index) => (
                            <PhotoItem key={index} url={item.url} name={item.name} ImgAtiva={() => AbrirImagem(item.url)} />
                        ))}
                    </C.PhotoList>
                }

                {!loading && photos.length === 0 &&
                    <C.ScreenWarning>
                        <div className='emoji'>😭</div>
                        <div>Não há fotos cadastradas.</div>
                    </C.ScreenWarning>
                }

            </C.Area>
            <Footer />
        </C.Container>
    )
}
