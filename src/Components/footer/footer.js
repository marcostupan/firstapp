import React from 'react'
import './styles.css'
import Logo from '../../assets/Batman-logo-black-and-white-picture_2560x1600.jpg';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div>
            <footer className='footer'>
                <img id='logo' src={Logo} />
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por: Marcos Ribeiro</span>

                <nav className='footer-navigation'>
                <ul className='footer-list'>
                    <Link style={{ textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/fotos'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to='/contato'>
                        <li>Fotos</li>
                    </Link>
                    <li>Comentários</li>
                </ul>
            </nav>
            </footer>
        </div>
    )
}

export default Footer;