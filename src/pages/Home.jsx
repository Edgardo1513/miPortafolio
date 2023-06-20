import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    return (
        <div>              
          <Card className="bg-dark text-info " >
            <Card.Img  src="fondo.jpg" alt="fondo" />  
              <Card.ImgOverlay>             
                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Responsable</Accordion.Header>
                                <Accordion.Body>
                                    <img src="Habilidades/responsable.jpg" alt="" />
                                </Accordion.Body>
                        </Accordion.Item>
                 </Accordion>

                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Trabajo en equipo</Accordion.Header>
                                <Accordion.Body>
                                    <img src="Habilidades/family.jpg" alt="" />
                                </Accordion.Body>
                        </Accordion.Item>
                 </Accordion>

                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Creativo</Accordion.Header>
                                <Accordion.Body>
                                    <img src="Habilidades/creativo.jpg" alt="" />
                                </Accordion.Body>
                        </Accordion.Item>
                 </Accordion>

                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Puntual</Accordion.Header>
                                <Accordion.Body>
                                    <img src="Habilidades/puntual.jpg" alt="" />
                                </Accordion.Body>
                        </Accordion.Item>
                 </Accordion>

                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Proactivo</Accordion.Header>
                                <Accordion.Body>
                                    <img src="Habilidades/proactivo.jpg" alt="" />
                                </Accordion.Body>
                        </Accordion.Item>
                 </Accordion>

                 <Accordion className="d-inline-flex  p-2" >
                        <Accordion.Item eventKey="5">
                        <Accordion.Header>Autodidacta</Accordion.Header>
                            <Accordion.Body>
                            <img src="Habilidades/autodidacta.jpg" alt="" />
                            </Accordion.Body>                   
                        </Accordion.Item>
                 </Accordion>                      
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Grupo de Certificados 1</Accordion.Header>
                        <Accordion.Body>
                            <CardGroup>
                                <Card>
                                    <Card.Img  variant="top" src="certificados/certificadoA1.jpg" />                       
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="certificados/certificadoA2.jpg" />                    
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="certificados/certificadoB6.jpg" />                        
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="certificados/certificadoB7.jpg" />                        
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="certificados/certificadoC8.jpg"/>                        
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="certificados/certificadoC9.jpg" />                        
                                </Card>
                            </CardGroup>
                    </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="1">
                        <Accordion.Header>Grupo de Certificados 2</Accordion.Header>
                        <Accordion.Body>
                            <CardGroup>
                                <Card>
                                        <Card.Img variant="top" src="certificados/certificadoD13.jpg" />                        
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="certificados/certificadoD14.jpg" />                        
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="certificados/certificadoD15.jpg" />                        
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="certificados/certificadoD16.jpg" />                        
                                    </Card>
                                    <Card>
                                        <Card.Img variant="top" src="certificados/diploma.jpg" />                        
                                </Card>
                            </CardGroup>
                        </Accordion.Body>
                    </Accordion.Item>
             </Accordion>
            </Card.ImgOverlay> 
            <Card.Text className='footer' > © 2022 Copyright: Edgardo Rafael Oñate Povea <a href="https://www.linkedin.com/in/edgardo-rafael-oñate-povea-249568167" >Linkedin.com</a></Card.Text> 
          </Card>
       </div>
    );
};


export default Home;