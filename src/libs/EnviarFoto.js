import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, getMetadata } from 'firebase/storage';
import { v4 as createID } from 'uuid';

const BancoImage = "Imagens";

export const getAll = async () => {
    let list = [];

    const imagesFolder = ref(storage, BancoImage);
    const photoList = await listAll(imagesFolder);

    for (let uniItem in photoList.items) {
        let photoRef = photoList.items[uniItem];
        let photoURL = await getDownloadURL(photoRef);
        
        // Obtendo os metadados da imagem
        let metadata = await getMetadata(photoRef);
        let uploadDate = new Date(metadata.timeCreated);

        list.push({
            name: photoRef.name,
            url: photoURL,
            date: uploadDate  // Adicionando a data ao objeto
        });

        // console.log('data aqui:', uploadDate);  // Exibindo a data no console
    }

    // Ordenar a lista pela data (mais recentes primeiro)
    list.sort((a, b) => b.date - a.date);

    return list;
}

export const insert = async (file) => {
    if (['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
        let randomName = createID();
        let newFile = ref(storage, `${BancoImage}/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoURL = await getDownloadURL(upload.ref);

        return { 
            name: upload.ref.name, 
            url: photoURL 
        };
    } else {
        return new Error("Tipo de arquivo não permitido.");
    }
}
