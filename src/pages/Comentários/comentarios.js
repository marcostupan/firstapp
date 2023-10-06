import React from "react";
import './styles.css'
import Header from "../../Components/Header/header";

function Comentarios() {
    return(
        <div>
            <Header />
            <main>
                <div className="comment-section">
                    <div className="comment">
                        Primeiro Comentário.
                    </div>
                    <div className="comment">
                        Segundo Comentário.
                    </div>
                    <div className="comment">
                        Terceiro Comentário.
                    </div>
                    <div className="comment">
                        Quarto Comentário.
                    </div>
                    <div className="comment">
                        Quinto Comentário.
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Comentarios;