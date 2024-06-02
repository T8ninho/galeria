import * as C from './index.style'

const PhotoItem = ({ url, name, ImgAtiva }) => {
    return (
        <C.Container onClick={ImgAtiva}>
            <div>
                <img src={url} alt={name} />
            </div>
        </C.Container>
    )
}

export default PhotoItem;