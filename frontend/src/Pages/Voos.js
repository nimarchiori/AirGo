import React from 'react';
import Nav from 'react-bootstrap/Nav';
import "../CSS/Voos.css";

const Voos = () => {
    return ( 
<>
<div>
    <center>
        <h3><b>VOOS COM ATÉ 50% DE DESCONTO</b></h3>
    </center>
    

    <Nav className='nav' variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link >Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Option 2</Nav.Link>
      </Nav.Item>
    </Nav>
 
</div>
</>
    );
};

export default Voos;