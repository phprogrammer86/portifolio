import React from "react";
import styled from "styled-components";
import imagem from '../../media/1673538468400.jpg';

const MyPhoto = styled.img `
border-radius: 100% 100% 100% 100%;
width: 200px;
top: 50;
`;


const Perfil = () => {
    return (
        
        <MyPhoto src={imagem} alt="Minha imagem" />
        
    );
}

export default Perfil;