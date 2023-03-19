import React from 'react'
import * as C from './index.style'
import Logo from '../../Images/Logo.png'

export default function Appbar(props) {

    return(
       <C.Container>
            <nav class="navbar container">
                <a href="/" class="logo">
                    <img src={Logo} alt="Logo"/>
                </a>
                <input type="checkbox" id="toggler" />
                <label for="toggler" class="burger">
                    <span class="bun bun--toptp"></span>
                    <span class="bun bun--top"></span>
                    <span class="bun bun--bottom"></span>
                </label>
                <div class="menu">
                    <ul class="list">
                        <li>{props.Inicio === true ?
                            <a href="/" className="linkActived">Início</a> :
                            <a href="/" className="link">Início</a>
                            }
                        </li>
                        <li>{props.Galeria === true ?
                            <a href="galeria" className="linkActived">Galeria</a> :
                            <a href="galeria" className="link">Galeria</a>
                            }
                        </li>
                        <li>{props.Contatos === true ?
                            <a href="contatos" className="linkActived">Contatos</a> :
                            <a href="contatos" className="link">Contatos</a>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
       </C.Container>
    )
}