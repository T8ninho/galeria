import * as C from './index.style'

export const PhotoItem = ({ url, name, ImgAtiva }) => {

    return (
        <C.Container onClick={ImgAtiva}>
                <header>
                    <img src={url} alt={name} />
                    <h4 className='HouverContainer'>Nome aleatório:</h4>
                    <p className='HouverContainer'>{name}</p>
                </header>
        </C.Container>
    )
}

export default PhotoItem;