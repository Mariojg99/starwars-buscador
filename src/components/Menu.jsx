import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Menu = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="logo" width={100} />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;
