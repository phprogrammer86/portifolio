import styled from 'styled-components';
import icone from '../../media/Icons/gitIcon.png';


const JsIcon = styled.img`
  border-radius: 50% 50% 50% 50% ;
  width: 6%;
  
`;

function Gitbubble() {
  return (
    
     <JsIcon src={icone} />
    
  );
}

export default Gitbubble;