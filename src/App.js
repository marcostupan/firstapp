import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import { useState } from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Detalhes from './pages/detalhes/detalhes';
import Comentarios from './pages/Comentários/comentarios';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/fotos' element={<Fotos />}/>
        <Route path='/detalhes/:id' element={<Detalhes />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
