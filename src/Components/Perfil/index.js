import React from "react";
import styled from "styled-components";
import imagem from '../../media/1673538468406.jpg';
import './stylePerf.css'


const Perfil = () => {
    return (
        
        <img className="neonPerf estiloPerf" src={imagem} alt="Minha imagem" />
        
    );
}

export default Perfil;