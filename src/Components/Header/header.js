import React from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Batman-logo-black-and-white-picture_2560x1600.jpg'


function Header(){

    const navigate = useNavigate();
    
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}


export default Header;