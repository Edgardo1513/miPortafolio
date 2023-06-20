import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const App1 = () => {
    return (
        <div>
            <h1>Proyecto E-commer con React</h1>
            <Card style={{ width: '105rem' }}>
            <Card.Img variant="top" src="E-commer.png" />
            <Card.Body>
                <Card.Title>E-commer</Card.Title>
                <Card.Text>
                El comercio electrónico, a veces llamado e-commerce (del inglés electronic commerce),
                consiste en la compra y venta de bienes y servicios a través de páginas web o de plataformas digitales en línea, 
                como las redes sociales y las aplicaciones para smartphone. Es una de las actividades económicas de mayor impacto en el mundo entero desde la popularización de internet a mediados de la década de 1990.
                </Card.Text>
                <Button variant="primary">Ver Proyecto</Button>
            </Card.Body>
            </Card>
        </div>
    );
};



export default App1;