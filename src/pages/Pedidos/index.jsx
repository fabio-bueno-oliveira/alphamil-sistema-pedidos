import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../../components/menu';
import Table from 'react-bootstrap/Table';

function Pedidos () {

  const BASE_URL = 'https://alphamil-6c4405384cad.herokuapp.com';
  const [pedidos, setPedidos] = useState([
    {id: null, data_pedido_realizado: null}
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const carregaPedidos = async () => {
      try {
        let res = await fetch(`${BASE_URL}/pedidos`);
        let fi = await res.json();
        console.log(fi);
        setPedidos(fi);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    
    carregaPedidos();
  }, []);

  // const data_pedido = new Date(pedido.data_pedido_realizado).toString();

  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>
            <h1>Pedidos</h1>
          </Col>
          <Col align="end">
            <Button>Cadastrar novo pedido</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {isLoading ?
              <h3>Carregando...</h3>
            :
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID Sistema</th>
                    <th>ID Pedido Impresso</th>
                    <th>Data do pedido</th>
                    <th>Cliente</th>
                    <th>Itens</th>
                    <th>Status entrega</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.map((pedido, key) =>
                    <tr key={key}>
                      <td>{pedido.id}</td>
                      <td>{pedido.id_pedido_impresso}</td>
                      <td>{pedido.data_pedido_realizado}</td>
                      <td>{pedido.cliente}</td>
                      <td>{pedido.itens}</td>
                      <td>{pedido.status_entrega}</td>
                      <td><a href={`/pedido/${pedido.id}`}>Detalhes</a></td>
                    </tr>
                  )}
                </tbody>
              </Table>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pedidos;