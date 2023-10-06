import React from 'react'
import Header from '../../Components/Header/header';
import './styles.css';
import Video from '../../assets/video.mp4';
import Cards from '../../Components/cards';
import Footer from '../../Components/footer/footer';

function Home(){


    return (
        <>
         <Header/>
         <div id='banner'></div>
         <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos.
                </video>            
                <div id='sinopse'>
                    <p className='description'>
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança da população.
                    </p>
                    <button className='button'>Comprar Ingresso</button>
                </div>
            </div>
         </div>
         <Cards />
         <Footer />
        </>
    )
}

export default Home;