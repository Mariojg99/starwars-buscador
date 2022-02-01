import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CharacterList = ({ id, name, image }) => {
    return (

            <Col className='mt-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} alt={id} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    )
}

export default CharacterList;
