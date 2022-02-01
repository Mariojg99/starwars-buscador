import React from 'react';
import { Card } from 'react-bootstrap';

const CharacterCard = ({ data }) => {
    return (
        <div>
            {
                data.map(personaje => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={personaje.image} alt={personaje.id} />
                        <Card.Body>
                            <Card.Title>{personaje.name}</Card.Title>
                        </Card.Body>
                    </Card>

                ))
            }

        </div>

    );
};

export default CharacterCard;
