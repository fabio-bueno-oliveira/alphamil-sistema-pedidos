import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../../components/menu';
import Table from 'react-bootstrap/Table';

function Clientes () {

  const BASE_URL = 'https://alphamil-6c4405384cad.herokuapp.com';
  const [clientes, setClientes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const carregaClientes = () => {
      setIsLoading(true);
      fetch(`${BASE_URL}/clientes`)
        .then(response => response.json())
        .then(data => setClientes(data))
        .then(setIsLoading(false))
        .catch(error => console.error(error));
    }
    carregaClientes();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <h1>Clientes</h1>
            <Button>Cadastrar novo cliente</Button>
            {isLoading && <Badge bg="secondary">Carregando...</Badge>}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente, key) =>
                  <tr key={key}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.cidade}</td>
                    <td>{cliente.uf}</td>
                    <td><a href={`/cliente/${cliente.id}`}>Detalhes</a></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Clientes;