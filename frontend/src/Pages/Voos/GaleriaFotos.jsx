import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Casa1 from "../Voos/imagens/disney1.jpg";
import Casa2 from "../Voos/imagens/disney2.jpg";
import Casa3 from "../Voos/imagens/disney3.webp";
import Casa4 from "../Voos/imagens/disney4.jpg";
import Casa5 from "../Voos/imagens/disney5.jpg";
import Casa6 from "../Voos/imagens/disney6.webp";
import Casa7 from "../Voos/imagens/disney7.webp";
import Casa8 from "../Voos/imagens/disney8.jpg";
import '../Voos/parque.css'

function Projeto() {
    const galeriaFotos = [
        { foto: Casa1,  },
        { foto: Casa2,  },
        { foto: Casa3,  },
        { foto: Casa4,  },
        { foto: Casa5,  },
        { foto: Casa6,  },
        { foto: Casa7,  },
        { foto: Casa8, },
    ];

    return (
        <Container className="projetosPagina">
            <Row>
                <Col>

                    <Container>
                        <Row className="imagenscoluna1">
                            {galeriaFotos.map((galeria, index) => (
                                <Col sm={6} md={3} key={index}>
                                    <div className="imagem-container">
                                        <img className="imagem1" src={galeria.foto} alt="" />
                                        <div className="catalogoImagens">
                                            <h3>{galeria.titulo}</h3>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    </Col>
                    </Row>
                    </Container>
                    );
}

export default Projeto;