import React from 'react'
import * as C from './index.style'
import Logo from '../../Images/Logo.png'

export default function Appbar() {

    return(
       <C.Container>
                <a href="/" class="logo">
                    <img src={Logo} alt="Logo"/>
                </a>
                <C.Titulo>Galeria de Fotos</C.Titulo>
                <div></div>
       </C.Container>
    )
}