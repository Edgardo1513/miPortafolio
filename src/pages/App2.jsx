import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const App2 = () => {
    return (
        <div>
            <h1>Proyecto  App Clima con React</h1>
            <Card style={{ width: '105rem' }}>
            <Card.Img variant="top" src="WeatherApp.png" />
            <Card.Body>
                <Card.Title>App Clima</Card.Title>
                <Card.Text>
                En la app Clima, se incluye una serie de funciones que brindan información sobre el clima actual y el pronóstico del tiempo. Actualmente, algunas funciones no están disponibles en todos los países o regiones.
                </Card.Text>
                <Button variant="primary">Ver Proyecto</Button>
            </Card.Body>
            </Card>
        </div>
    );
};



export default App2;