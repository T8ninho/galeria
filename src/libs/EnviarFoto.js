import { useState } from 'react';
import { storage, db, BancoImage } from '../libs/firebase';
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { v4 as createID } from 'uuid';
// import ImageCompressor from 'image-compressor.js';

export const EnviarFoto = ({onUpload}) => {
    const [Imagens, setImagens] = useState([]);

    // const compressImage = async (file) => {
    //     const compressedImage = await new Promise((resolve, reject) => {
    //         new ImageCompressor(file, {
    //             quality: 0.5, // Defina a qualidade da imagem desejada aqui (0.1 a 1)
    //             success(result) {
    //                 resolve(result);
    //             },
    //             error(err) {
    //                 reject(err);
    //             },
    //         });
    //     });
    //     return compressedImage;
    // };

    const Enviando = async() => {
        const ImgEnviadas = [];
        const randomName = createID();

        for (const IMG of Imagens) {
            const ImagemRef = ref(storage, `${BancoImage}/${IMG.name}`);
            await uploadBytes(ImagemRef, IMG);
            const url = await getDownloadURL(ImagemRef);

            const metadata = await getMetadata(ImagemRef);
            const uploadDate = new Date(metadata.timeCreated);

            const ImagemData = {name: randomName, url, date: uploadDate};
            const docRef = await addDoc(collection(db, BancoImage), ImagemData);
            ImgEnviadas.push({ ...ImagemData, id: docRef.id })
        }

        // Comprimir a imagem antes de enviar
        // const compressedImage = await compressImage(file);
        // let result = await Photos.insert(compressedImage);

        onUpload(ImgEnviadas);
    };

    return(
        <div>
            <input 
                type="file" 
                accept="image/*"
                multiple
                onChange={(e) => setImagens([...e.target.files])} 
            />
            <button onClick={Enviando}>Upload</button>
        </div>
    )
}


