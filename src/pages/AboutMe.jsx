import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const AboutMe = () => {
    return (
        <div>
        <Card className="bg-dark text-info " >
        <Card.Img  src="fondo.jpg" alt="fondo" />      
            <Card.ImgOverlay>

                <Card.Title> <h1>Edgardo Rafael Oñate Povea</h1>
                
                </Card.Title>
                <Card.Text >                   
                    
                    <img  className='photo ' src="perfil/photo1.png" alt="perfil" />  <h2><small>TECNICO EN SISTEMA DE REFRIGERACION Y AIRE ACONDICIONADO</small> & FULL-STACK WEB DEVELOPER AND COMPUTER SCIENCE</h2>
                </Card.Text>
            
                <Card.Text > 
                    <Accordion  className="d-inline-flex  p-1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>SOBRE MI</Accordion.Header>
                                <Accordion.Body>
                                <p>Soy una persona proactiva y posibilitador, excelente compañero de equipo, organizado y responsable. <br /> Disfruto mucho aprender cosas nuevas, por lo que mi objetivo es un puesto desafiante y dinámico donde poder compartir mi experienciay a su vez sumar nuevos conocimientos </p>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
              
                    <Accordion  className="d-inline-flex p-1 ">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header >EDUCACION</Accordion.Header>
                                <Accordion.Body >
                                <h5>COLEGIO JORGE N. ABELLO</h5>
                                <p>•TITULO DE BACHILLER Diplomado y Acta de Grado en 2003.</p>
                                <h5>SERVICIO NACIONAL DE APRENDISAJE SENA</h5>
                                <p>• CERTIFICADO EN TÉCNICO EN MANTENIMIENTO DE SISTEMA DE REFRIGERACIÓN Y AIRE ACONDICIONADO EN 2009.</p>
                                <h4>CURSOS / HABILIDADES</h4> 
                                <h5>SERVICIO NACIONAL DE APRENDISAJE SENA</h5>
                                <p>•CERTIFICADO EN PROGRAMACIÓN BASICA DE MICROCONTROLADORES EN 2012.</p>
                                <h5>SERVICIO NACIONAL DE APRENDISAJE SENA</h5>
                                <p>•CERTIFICADO EN DISEÑO DE SOLUCIONES DE INTERNET DE LAS COSAS EN 2002.</p>
                                <h5>ACADEMLO SCHOOL OF TECHNOLY AND COMPUTER SCIENCE</h5>
                                <p>•CERTIFICADO EN fOUNDATIONS IN HTML, CSS Y JAVASCRIPT 2023.</p>
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                
                    <Accordion  className="d-inline-flex p-1" >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>CURSOS / HABILIDADES</Accordion.Header>
                                <Accordion.Body>
                                <h5>SERVICIO NACIONAL DE APRENDISAJE SENA</h5>
                                <p>•CERTIFICADO EN PROGRAMACIÓN BASICA DE MICROCONTROLADORES EN 2012.</p>

                                <h4>IDIOMAS</h4>
                                <h5>SERVICIO NACIONAL DE APRENDISAJE SENA</h5>
                                <p>•CERTIFICADO EN IDIOMA INGLES NIVEL BASICO EN 2006.</p>                                    
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                 
                    <Accordion className="d-inline-flex p-1">
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>EXPERIENCIA LABORAL</Accordion.Header>
                                <Accordion.Body>
                                <h4>Empresa Serviparamo, 9 mayo 2009 - 0 marzo 2017</h4>
                                <h5>Responsable servicios de mantenimiento a Aire Acondicionado domestico e industrial</h5>
                                <p>• Diagnosticar a 1240 Aires Acondicionado anualmente en mejoría de la vida útil del equipo dejando al cliente satisfecho.</p>
                                <p>• liderar al grupo en el mejoramiento de cada sistema intervenido en el día a día.</p>
                                <p>• Aportar soluciones con mi jefe Inmediato en las implementaciones de nuevos proyectos.</p>
                                <p>• Corrección de impuntualidad a la implementación del manejo del tiempo, reduciendo retardos hasta un 40%.</p>

                                <h4>Empresa Corferias Inversiones S.A.S, 1 mayo 2017 - actualmente laborando</h4>
                                <h5>Técnico Oficial  en mantenimiento en infraestructura y equipos</h5>
                                <p>• Colaboración y supervisión con mi experiencia adquirida en el apoyo de soluciones con los contratistas en tema de mantenimiento de equipos y infraestructura.</p>
                                <p>• Atención inmediata dándole soluciones en la emergencia por fallas de los equipos en cualquier hora del día, reduciendo los costó de contracciones.</p>
                                <p>• Entregando excelencia del servicio en soporte técnico para la satisfacción del cliente en eventos y ferias.</p>
                                <p>• implementando nuevas ideas en la mejora de cada sistema de la infraestructura para reducir inconformidades de los clientes </p>                                    
                                </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Text>
               
                
            </Card.ImgOverlay>
            <Card.Text className='footer' > © 2022 Copyright: Edgardo Rafael Oñate Povea <a href="https://www.linkedin.com/in/edgardo-rafael-oñate-povea-249568167" > Linkedin.com</a></Card.Text>
        </Card>               
        </div>
    );
};
  


export default AboutMe;