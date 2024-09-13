import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../../components/menu';

function Home () {

  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
            <Button>Teste</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;