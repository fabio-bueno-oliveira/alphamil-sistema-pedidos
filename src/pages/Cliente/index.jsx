import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../../components/menu';
import Form from 'react-bootstrap/Form';

function Cliente () {

  const BASE_URL = 'https://alphamil-6c4405384cad.herokuapp.com';
  const { id } = useParams();
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const carregaCliente = () => {
      setIsLoading(true);
      fetch(`${BASE_URL}/cliente/${BASE_URL}`)
        .then(response => response.json())
        .then(data => setClientes(data))
        .then(setIsLoading(false))
        .catch(error => console.error(error));
    }
    carregaCliente();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Row className="py-4">
          <Col><h1>Cliente</h1></Col>
          <Col align="end"><Button>Editar dados do Cliente</Button></Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row className="py-3">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cliente;