import React from "react";
import Header from "../../Components/Header/header";
import './styles.css'
import Footer from "../../Components/footer/footer";

function Fotos(){
    return (
        <div>
            <Header />
            <div className="container">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=1200&h=675&crop=1" alt="Gallery image 1"className="gallery__img"/>
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <img src="https://cinemacao.com/wp-content/uploads/2022/03/batman-2-1130x590.jpg" alt="Gallery image 2"className="gallery__img"/>
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <img src="https://img.olhardigital.com.br/wp-content/uploads/2022/02/the-batman-robert-pattinson.jpeg" alt="Gallery image 3"className="gallery__img"/>
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <img src="https://sm.ign.com/ign_br/news/t/the-batman/the-batman-sequel-announced-with-robert-pattinson-at-cinemac_ffx9.jpg" alt="Gallery image 4"className="gallery__img"/>
                    </figure>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Fotos;