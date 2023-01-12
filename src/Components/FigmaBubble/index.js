import styled from 'styled-components';
import icone from '../../media/Icons/figmaIcon.png';
import './styleFigma.css';


const JsIcon = styled.img`
  
`;

function FigmaBubble() {
  return (
    
     <img className='estiloFig neonFig' src={icone} />
    
  );
}

export default FigmaBubble;