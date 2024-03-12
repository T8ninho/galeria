import * as C from './index.style'

export const PhotoItem = ({ url, name, ImgAtiva }) => {

    return (
        <C.Container onClick={ImgAtiva}>
            <div>
                <img src={url} alt={name} />
            </div>
            {/* <h4 className='HouverContainer'>Nome aleatório:</h4> */}
            {/* <p className='HouverContainer'>{name}</p> */}
        </C.Container>
    )
}

export default PhotoItem;