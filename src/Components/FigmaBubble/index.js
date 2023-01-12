import styled from 'styled-components';
import icone from '../../media/Icons/figmaIcon.png';


const JsIcon = styled.img`
  border-radius: 50% 50% 50% 50% ;
  width: 9%;
  
`;

function FigmaBubble() {
  return (
    
     <JsIcon src={icone} />
    
  );
}

export default FigmaBubble;