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
  const [isLoading, setIsLoading] = useState(false);
  const [cliente, setCliente] = useState({
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
    setIsLoading(true);
    const carregaCliente = async () => {
      try {
        let res = await fetch(`${BASE_URL}/cliente/${id}`);
        let fi = await res.json();
        console.log(fi);
        setCliente(fi);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    carregaCliente();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Row className="py-4">
          <Col><h1>Cliente</h1></Col>
          <Col align="end">
            <Button onClick={() => alert("Ocorreu um erro ao exibir os pedidos do Cliente")}>
              Ver pedidos deste Cliente
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {isLoading ?
              <h3>Carregando...</h3>
            :
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formNomeEmpresa">
                      <Form.Label>Nome da Empresa</Form.Label>
                      <Form.Control
                        id="formNomeEmpresa"
                        placeholder="Insira o nome da Empresa"
                        defaultValue={cliente.nome}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formCep">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control
                        id="formCep"
                        defaultValue={cliente.endereco_cep}
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
                        defaultValue={cliente.endereco}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formEnderecoNumero">
                      <Form.Label>Número</Form.Label>
                      <Form.Control
                        id="formEnderecoNumero"
                        placeholder="Insira o número do endereço (opcional)"
                        defaultValue={cliente.endereco_numero}
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
                        defaultValue={cliente.endereco_bairro}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formComplemento">
                      <Form.Label>Complemento</Form.Label>
                      <Form.Control
                        id="formComplemento"
                        placeholder="Ex: Apartamento, Bloco, etc (opcional)"
                        defaultValue={cliente.endereco_complemento}
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
                        defaultValue={cliente.endereco_cidade}
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
                        defaultValue={cliente.endereco_estado}
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
                        defaultValue={cliente.observacoes}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cliente;