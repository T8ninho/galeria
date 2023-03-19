import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as createID } from 'uuid';

export const getAll = async () => {
    let list = [];
    const BancoImage = "imagesd";

    const imagesFolder = ref(storage, BancoImage);
    const photoList = await listAll(imagesFolder);

    for(let uniItem in photoList.items) {
        let photoURL = await getDownloadURL(photoList.items[uniItem]);

        list.push({
            name: photoList.items[uniItem].name,
            url: photoURL
        })
    }

    return list;
}

export const insert = async (file) => {
    const BancoImage = "imagesd";

    if(['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {

        let randomName = createID();
        let newFile = ref(storage, `${BancoImage}/${randomName}`)

        let upload = await uploadBytes(newFile, file);
        let photoURL = await getDownloadURL(upload.ref);

        return { 
            name: upload.ref.name, 
            url: photoURL 
        };

    } else {
        return new Error("Tipo de arquivo não permitido.")
    }
}