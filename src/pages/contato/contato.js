import React from 'react'
import './styles.css'
import Header from '../../Components/Header/header';

function Contato(){
    return (
        <>
        <Header></Header>
        <div className='box'>
            <form action=''>
                <fieldset>
                    <legend><b>Formulário de Clientes</b></legend>
                    <br></br>
                    <div className='inputBox'>
                        <label for="nome" className='labelinput'>Nome Completo</label>
                        <input type='text' name='nome' id='nome' className='inputUser' required />
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <label for="email" className='labelinput'>Email</label>
                        <input type='email' name='email' id='email' className='inputUser' required />
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <label for="telefone" className='labelinput'>Telefone</label>
                        <input type='tel' name='telefone' id='telefone' className='inputUser' required />
                    </div>
                    <br></br>
                    <p>Sexo:</p>
                    <input type="radio" id="feminino" name='genero' value='feminino' required />
                    <label form='feminino'>Feminino</label>
                    <br></br>
                    <input type="radio" id="masculino" name='genero' value='masculino' required />
                    <label form='masculino'>masculino</label>
                    <br></br>
                    <input type="radio" id="outro" name='genero' value='outro' required />
                    <label form='outro'>outro</label>
                    <br></br>
                    <br></br>
                    <div className='inputBox'>
                        <label for='cidade' className='labelinput'>Cidade</label>
                        <input type='text' name='cidade' id='cidade'className='imputUser' required />
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <label for='estado' className='labelinput'>Estado</label>
                        <input type='text' name='estado' id='estado'className='imputUser' required />
                    </div>
                    <br></br>
                    <div className='inputBox'>
                        <label for='endereco' className='Endereço'>Cidade</label>
                        <input type='text' name='endereco' id='endereco'className='imputUser' required />
                    </div>
                    <br></br>
                    <input type='submit' className='submit' id='submit' />
                </fieldset>
            </form>
        </div>
        </>
    )
}

export default Contato;