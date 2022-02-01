import React from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import querystring from 'query-string'
import getCharacterByName from '../selectors/getCharacterByName';
import Menu from './Menu';
import CharacterList from './CharacterList';

const Home = ({ data }) => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search);
  const { q = '' } = querystring.parse(location.search);
  console.log(q);

  const [values, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = values;

  const charactersFiltered = getCharacterByName(data, searchText);
  console.log(charactersFiltered);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchText);
    navigate(`?q=${searchText}`)
  }

  return (
    <div>
      <Menu />

      <Container className='mt-4'>
        <h1>Buscador</h1>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type='text'
            placeholder='Buscar'
            className='me-2'
            name='searchText'
            aria-label='Search'
            value={searchText}
            onChange={handleInputChange}
          />
          <Button variant="outline-warning">Buscar</Button>
        </Form>
          <hr />
        <Container className='mt-4'>
        <Row xs={1} md={3}>
            {
              charactersFiltered.map(personaje => (
                <CharacterList key={personaje.id}
                  id={personaje.id}
                  name={personaje.name}
                  image={personaje.image} />
              ))
            }
        </Row>
      </Container>
      </Container>
    </div>
  );
};

export default Home;
