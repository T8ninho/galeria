import React, { useState, useEffect } from "react";
import Appbar from "../../Components/AppBar";
import Footer from "../../Components/Footer";
import PhotoItem from "../../Components/PhotoItem";
import * as Photos from '../../libs/EnviarFoto';
import * as C from './index.style';
import ImageCompressor from 'image-compressor.js';

export default function Inicio() {
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [ImageATV, setImageATV] = useState(null);
    const [ModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true);
            setPhotos(await Photos.getAll());
            setLoading(false);
        }
        getPhotos();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image');

        if (file && file.size > 0) {
            setUploading(true);
            // Comprimir a imagem antes de enviar
            const compressedImage = await compressImage(file);
            let result = await Photos.insert(compressedImage);
            setUploading(false);

            if (result instanceof Error) {
                alert(`${result.name} - ${result.message}`);
            } else {
                let newPhotoList = [...photos];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }
        }
    }

    const compressImage = async (file) => {
        const compressedImage = await new Promise((resolve, reject) => {
            new ImageCompressor(file, {
                quality: 0.5, // Defina a qualidade da imagem desejada aqui (0.1 a 1)
                success(result) {
                    resolve(result);
                },
                error(err) {
                    reject(err);
                },
            });
        });
        return compressedImage;
    };

    function AbrirImagem(Imagem) {
        setImageATV(Imagem)
        setModalOpen(true)
    }

    return (
        <C.Container>
            {!ModalOpen &&
                <Appbar />
            }

            <C.Area>
                <C.ModalContainer isOpen={ModalOpen}>
                    <C.ModalAberta>
                        <C.ModalImagem src={ImageATV} />
                        <C.ModalBotaoClose onClick={() => setModalOpen(false)}>
                            Fechar imagem
                        </C.ModalBotaoClose>
                    </C.ModalAberta>
                </C.ModalContainer>
                <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                    <input type="file" name="image" />
                    <input type="submit" value="Enviar" />
                    {uploading && "Enviando...😍"}
                </C.UploadForm>

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
