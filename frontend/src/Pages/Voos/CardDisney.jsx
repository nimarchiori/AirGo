import React from 'react';
import '../Voos/carddisney.css';
import Imagem1 from '../Voos/imagens/animalkingdom.webp'
import Imagem2 from '../Voos/imagens/disneyhollywoodstudios.webp';
import Imagem3 from '../Voos/imagens/EPCOT.webp';
import Imagem4 from '../Voos/imagens/magickingdom.webp'
import { Box } from "@chakra-ui/react"

const Card = () => {
  return (
 <center>
  <Box className='Box' boxShadow='2xl' p='6' rounded='md' bg='white'>

      <p><footer><b><h1>Ingressos para parques tematicos Disney Orlando!</h1></b></footer></p>

      <p className='textodisney'>Prepare-se para se divertir em atrações com muita música, fogos de artifício cintilantes e toda a magia deste mundo onde reina a fantasia. Você poderá abraçar Mickey, Minnie e outros personagens queridos!</p>

      <p className='textodisney'>Com seus ingressos você podera visitar os parques. <b>Um por dia!</b></p>

    <div className="card-container">
      <div className="card">
        <img src={Imagem1} alt="Imagem 1" />
      </div>

      <div className="card">
        <img src={Imagem2} alt="Imagem 2" />
      </div>
      <div className="card">
        <img src={Imagem3} alt="Imagem 3" />
      </div>
      <div className="card">
        <img src={Imagem4} alt="Imagem 4" />
      </div>
    </div>
  </Box>
 </center>
    

    
  );
};

export default Card;