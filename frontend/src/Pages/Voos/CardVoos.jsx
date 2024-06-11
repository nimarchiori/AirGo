import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Container, Row, Col, OverlayTrigger, Tooltip, Badge  } from 'react-bootstrap'
import '../Voos/CardVoos.css'
import { CgAirplane } from "react-icons/cg";
import { BsHousesFill } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { BsBackpack2Fill } from "react-icons/bs";
import { BsDuffleFill } from "react-icons/bs";
import { BsSuitcase2Fill } from "react-icons/bs";

const CardVoos = () => {

  
  return (
    <>
    <Container className="Container1">
      <Row >
        <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/674c78b3-1ee4-415c-bf76-d1fbd0bd0cd2/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voo para Fortaleza</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>Portal da Praia Hotel </Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>7.7</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $672
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>
         
        <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/29e691b7-287b-4e05-8276-7eb11a2c459f/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voos para Maceió</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>Laguna Praia Hotel </Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>5.4</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $1.247
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>

        <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/ad1cca52-5ab5-4af6-81be-88d5371cf9bf/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voos para Rio de Janeiro</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>Pompeu Rio Hotel</Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>7.7</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $421
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>
      </Row>
    </Container>
    
    <br/>
    <br/>
    <br/>

    <Container className="Container1">
      <Row>
      <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/47f1dd35-ebf7-47bf-a85c-c82ae9c6bd50/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voos para Natal</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>DUNNAS BEACH HOTEL</Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>7.7</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $1.104
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>

        <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/3177fe3a-8efb-4f21-a24d-962c52e588d3/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voo para Porto Seguro</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>Malibu Porto Hotel</Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>7.7</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $1.110
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>

        <Col>
        <Card boxShadow='dark-lg' p='6' rounded='md' bg='white' maxW='sm'>
  <CardBody>
    <Image
      src='https://media.staticontent.com/media/pictures/dbd43a5d-95af-4819-a934-3004a19f09b5/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl' ><b>Voo para Recife</b> </Heading>
      <Text>
        Saindo de São Paulo
        <br/>
        <Container >
        <Row>
          <Col  md={1}><CgAirplane /></Col>
          <Col md={9}>Voo direto</Col>
          
          
        </Row>
        <Row>
          <Col md={1}><BsHousesFill /></Col>
          <Col md={9}>Casa Recife Pousada</Col>
        </Row>
        <Row className="class">
          <Col className="padd" md={2}> <p className="classificacao"><b>7.0</b></p></Col>
          <Col className="padd" md={3}><IoIosStar /><IoIosStar /><IoIosStar /></Col>
          <Col className="paddoferta" md={8}><p className="oferta"><b>Oferta imbatível</b></p></Col>
        </Row>
          
          
            <Row className="colbag">
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">
     
     <Container>
      <Row className="top">
        <Col md={2}><BsBackpack2Fill /></Col>
        <Col  md={9}><h3><b>Inclui uma mochila ou bolsa</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}>Deve caber embaixo do assento dianteiro.</Col>
      </Row>
      <Row>
        <Col md={2}><BsDuffleFill /></Col>
        <Col md={9}><h3><b>Inclui bagagem de mão</b></h3></Col>
      </Row>
      <Row>
        <Col className="text" md={12}><p>Deve caber no compartimento superior do avião.</p></Col>
      </Row>
      <Row>
        <Col md={2}><BsSuitcase2Fill /></Col>
        <Col md={9}><h3><b>Inclui bagagem para despachar</b></h3> </Col>
        </Row>

        <Row>
          <Col className="text" md={12}><p>Você poderá despachar suas malas sem custo adicional quando chegar ao aeroporto.</p></Col>
        </Row>
        
       
     </Container>

     
     </Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <p
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image className="bag"
            ref={ref}
            roundedCircle
            src="https://cdn.icon-icons.com/icons2/936/PNG/512/suitcase-with-white-details_icon-icons.com_73387.png"
          />
          <span className="ms-1"><b>Bagagens</b></span>
        </p>
      )}
    </OverlayTrigger>
           
          </Row>
        </Container>
        
       <br/>
      
        

      </Text>
      <Text color='green.600' fontSize='2xl'>
        $780
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </Col>
      </Row>
    </Container>

    
    </>
  );
};
  
  


export default CardVoos;
