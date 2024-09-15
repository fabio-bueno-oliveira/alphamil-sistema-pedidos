import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Menu from '../../components/menu';
import Form from 'react-bootstrap/Form';

function Pedido () {

  const BASE_URL = 'https://alphamil-6c4405384cad.herokuapp.com';
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [pedido, setPedido] = useState({
    id: null,
    nome: null,
    endereco: null,
    endereco_numero: null,
    endereco_bairro: null,
    endereco_complemento: null,
    endereco_cidade: null,
    endereco_uf: null,
    endereco_pais: null,
    endereco_cep: null,
    cliente_desde_ano: null,
    observacoes: null,
    cadastro_sistema: null
  });

  useEffect(() => {
    const carregaPedido = () => {
      setIsLoading(true);
      fetch(`${BASE_URL}/pedido/${id}`)
        .then(response => response.json())
        .then(data => setPedido(data))
        .then(setIsLoading(false))
        .catch(error => console.error(error));
    }
    carregaPedido();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Row className="py-4">
          <Col><h1>Pedido</h1></Col>
          <Col align="end">
            {/* <Button onClick={() => setIsEditing(value => !value)}>
              Editar dados do Cliente
            </Button> */}
            <Button onClick={() => alert("Ocorreu um erro ao exibir os pedidos do Cliente")}>
              Ver pedidos deste Cliente
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formNomeEmpresa">
                    <Form.Label>Nome da Empresa</Form.Label>
                    <Form.Control
                      id="formNomeEmpresa"
                      placeholder="Insira o nome da Empresa"
                      defaultValue={pedido.nome}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formCep">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                      id="formCep"
                      defaultValue={pedido.endereco_cep}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formEndereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                      id="formEndereco"
                      placeholder="Insira o endereço da Empresa (Rua, Avenida, etc)"
                      defaultValue={pedido.endereco}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEnderecoNumero">
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      id="formEnderecoNumero"
                      placeholder="Insira o número do endereço (opcional)"
                      defaultValue={pedido.endereco_numero}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      id="formBairro"
                      placeholder="Insira o bairro"
                      defaultValue={pedido.endereco_bairro}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formComplemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                      id="formComplemento"
                      placeholder="Ex: Apartamento, Bloco, etc (opcional)"
                      defaultValue={pedido.endereco_complemento}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formCidade">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control
                      id="formCidade"
                      disabled
                      placeholder="Insira a Cidade"
                      defaultValue={pedido.endereco_cidade}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      id="formEstado"
                      disabled
                      placeholder="Insira o Estado"
                      defaultValue={pedido.endereco_estado}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formObservacoes">
                    <Form.Label>Observações e anotações</Form.Label>
                    <Form.Control
                      id="formObservacoes"
                      as="textarea" rows={3}
                      placeholder="Observações ou notas importantes sobre o Cliente"
                      defaultValue={pedido.observacoes}
                    />
                  </Form.Group>
                </Col>
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

export default Pedido;