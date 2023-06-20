import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App5 = () => {
    return (
        <div>
            <h1>Proyecto API Caricature con React</h1>
            <Card style={{ width: '105rem' }}>
            <Card.Img variant="top" src="APICaricatures.png" />
            <Card.Body>
                <Card.Title>App API Caricature Rick and Morty</Card.Title>
                <Card.Text>
                Rick y Morty es una serie de televisión animada estadounidense creada por Dan Harmon y Justin Roiland que se estrenó el 2 de diciembre de 2013 en el bloque de programación Adult Swim de Cartoon Network.
                 En Canadá, se estrenó el 10 de enero de 2016 en la versión canadiense del bloque de programación Adult Swim de Cartoon Network.
                La primera temporada del programa consta de 11 episodios de 22 minutos. Después de emitir los primeros seis episodios, [adult swim] renovó el programa para una segunda temporada, que consta de 10 episodios de 22 minutos. 
                El programa se renovó para una tercera temporada, que consta de 10 episodios de 22 minutos que se emitieron en el verano de 2017.
                A partir del otoño de 2019, Rick y Morty regresaron con una cuarta temporada con 10 episodios, siendo la primera mitad de la temporada estrebada en 2019 y la segunda mitad después de año nuevo.
                [1]El programa se basó en una serie de cortometrajes de animación cruda para Channel 101 basados en una parodia de Back to the Future, The Real Animated Adventures of Doc and Mharti de Justin Roiland.
                </Card.Text>
                <Button variant="primary">Ver Proyecto</Button>
            </Card.Body>
            </Card>
        </div>
    );
};



export default App5;