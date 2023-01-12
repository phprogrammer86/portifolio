import styled from 'styled-components';
import icone from '../../media/Icons/jsIcon.png';


const JsIcon = styled.img`
  border-radius: 50% 50% 50% 50% ;
  
`;

function JsBubble() {
  return (
    
     <JsIcon src={icone} />
    
  );
}

export default JsBubble;