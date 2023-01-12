import styled from 'styled-components';
import icone from '../../media/Icons/reactIcon.png';


const JsIcon = styled.img`
  border-radius: 50% 50% 50% 50% ;
  width: 12%;
  
`;

function ReactBubble() {
  return (
    
     <JsIcon src={icone} />
    
  );
}

export default ReactBubble;