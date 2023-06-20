import React from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

const MySocialMedia = () => {
    return (
        <div> 
        <Card className="bg-dark text-info " >
         <Card.Img  src="fondo.jpg" alt="fondo" />      
          <Card.ImgOverlay> 
            <Card.Title ><h1> Mi Redes Sociales</h1></Card.Title>  
            <Figure className='icon'>    
              <i className='bx bxl-linkedin'></i>  
              <Figure.Caption>
                <a href="https://www.linkedin.com/in/edgardo-rafael-oñate-povea-249568167" target='about'> Ver Perfil Linkedin</a>
              </Figure.Caption>
            </Figure> 

            <Figure className='icon'>    
            <i className='bx bxl-facebook'></i>
              <Figure.Caption>
                <a href="https://www.facebook.com/edgardorafael.onatepovea" target='blank'> Ver Perfil Facebook</a>
              </Figure.Caption>
            </Figure> 

            <Figure className='icon'>    
            <i className='bx bx-envelope' ></i>
              <Figure.Caption>
               <a id="mail" href="mailto:test@correo.com">Enviar edgardorafael0472@gmail.com</a>
              </Figure.Caption>
            </Figure>

           

            <Figure className='icon'>    
            <i className='bx bxl-whatsapp'></i>
              <Figure.Caption>
              <a href="https://wa.me/+573017298719?text=Tu%20Mensaje%20De%20Texto" target="_blank"> Enviar a WhatsApp</a>
              </Figure.Caption>
            </Figure>                         
         </Card.ImgOverlay> 
        <Card.Text className='footer' > © 2022 Copyright: Edgardo Rafael Oñate Povea <a href="https://www.linkedin.com/in/edgardo-rafael-oñate-povea-249568167" >Linkedin.com</a></Card.Text>
       </Card>
        </div>
    );
};



export default MySocialMedia;