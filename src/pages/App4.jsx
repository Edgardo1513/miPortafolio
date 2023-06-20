import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App4 = () => {
    return (
        <div>
            <h1>Proyecto Pokedex con react</h1>
            <Card style={{ width: '105rem' }}>
            <Card.Img variant="top" src="Pokedex.png" />
            <Card.Body>
                <Card.Title>App Pokedex </Card.Title>
                <Card.Text>
                    Pokédex4 (ポケモン図鑑 Pokémon Zukan en japonés, o Pokémon Dexter, también llamado Indexador Pokémon), 
                    en el mundo Pokémon es una enciclopedia virtual portátil de alta tecnología que los entrenadores Pokémon 
                    llevan consigo para registrar las fichas de todas las diversas especies Pokémon con las que se encuentran durante su viaje como entrenadores.
                    En general, cuando se cumplen ciertos requisitos, la capacidad de la Pokédex se puede aumentar permitiendo almacenar datos de otros Pokémon, que no son comunes, 
                    como los legendarios y Pokémon que no son originarios de esa región. A dicha Pokédex "ampliada" se la conoce como Pokédex Nacional. Según el episodio EP068 de la primera temporada en el anime,
                    fue creada por el profesor Westwood V; sin embargo, en los videojuegos, el creador es el profesor Oak.
                </Card.Text>
                <Button variant="primary">Ver Proyecto</Button>
            </Card.Body>
            </Card>
        </div>
    );
};



export default App4;