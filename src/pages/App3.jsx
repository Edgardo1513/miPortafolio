import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const App3 = () => {
    return (
        <div>
            <h1>Proyecto App CRUD USERS con React</h1>
            <Card style={{ width: '105rem' }}>
            <Card.Img variant="top" src="CRUDUSERS.png" />
            <Card.Body>
                <Card.Title>App CRUD </Card.Title>
                <Card.Text>
                CRUD es el acrónimo de Create (Crear), Read (Leer), Update (Actualizar) y Delete (Borrar).
                 Este concepto se utiliza para describir las cuatro operaciones básicas que pueden realizarse en la mayoría de las bases de datos y sistemas de gestión de información.
                 Estas operaciones permiten a los usuarios crear nuevos datos (Create), leer los existentes (Read), actualizarlos (Update) y eliminarlos (Delete). 
                 CRUD es una función esencial para muchos sistemas de información, ya que permite a los usuarios realizar tareas básicas de mantenimiento y gestión de datos.
                </Card.Text>
                <Button variant="primary">Ver Proyecto</Button>
            </Card.Body>
            </Card>
        </div>
    );
};



export default App3;