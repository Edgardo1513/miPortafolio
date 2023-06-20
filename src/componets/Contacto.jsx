import React from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

const Contacto = () => {
    return (
        <div>
             <Card className="bg-dark text-info " >
            <Card.Img  src="fondo.jpg" alt="fondo" />      
            <Card.ImgOverlay>                     
                 <Figure className='icon'>    
                    <i class='bx bxl-css3' ></i>  
                        <Figure.Caption>
                      <span>CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.</span>
                        </Figure.Caption>
                    </Figure>

                    <Figure className='icon'> 
                    <i class='bx bxl-react'></i>     
                        <Figure.Caption>
                       <span>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</span>
                        </Figure.Caption>
                    </Figure>

                    <Figure className='icon'>   
                    <i class='bx bxl-javascript' ></i>   
                        <Figure.Caption>
                       <span> JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.</span>
                        </Figure.Caption>
                    </Figure>

                    <Figure className='icon'> 
                    <i class='bx bxl-git'></i>     
                        <Figure.Caption>
                       <span>Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.</span>
                        </Figure.Caption>
                    </Figure>

                    <Figure className='icon'>
                    <i class='bx bxl-github'></i>   
                        <Figure.Caption>
                        <span>GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.</span>
                        </Figure.Caption>                        
                    </Figure>

                    <Figure className='icon'>                        
                        <Figure.Caption>
                        <a href="tel:+573017298719" >Llamar +57  301 729 8719 <i className='bx bx-phone' ></i></a>    
                            <a id="mail" href="mailto:test@correo.com"> edgardorafael0472@gmail.com <i class='bx bxs-envelope'></i> </a>
                         <a href="https://goo.gl/maps/ERCFuNH57a6bGyhLA" target="_blank">Colombia/Atlantico <i class='bx bxs-map' ></i></a>           
                        </Figure.Caption>
                    </Figure>  
                    
                   
              
           
                   
            </Card.ImgOverlay> 
            <Card.Text className='footer' > © 2022 Copyright: Edgardo Rafael Oñate Povea <a href="https://www.linkedin.com/in/edgardo-rafael-oñate-povea-249568167" > Linkedin.com </a></Card.Text>
            </Card>
           
            
            
            
            
            
           
        </div>
    );
};



export default Contacto;