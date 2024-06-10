import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Container, Row, Col} from 'react-bootstrap'
import '../Voos/CardVoos.css'
import { CgAirplane } from "react-icons/cg";
import { BsHousesFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';


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
          <Col md={9}>Hospedagem</Col>
          </Row>
        </Container>
        
       <br/>

        <Stack direction="horizontal" gap={6}>
      <Badge pill bg="primary">
        <h2>Oferta Imbatível</h2>
      </Badge>
        </Stack>

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
      src='https://media.staticontent.com/media/pictures/1b808452-3415-40fb-a85d-92c7b40b7c83/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl'><b>Voos para Maceió</b></Heading>
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
          <Col md={9}>Hospedagem</Col>
          </Row>
        
      
        </Container>
      </Text>
      <Text color='green.600' fontSize='2xl'>
        $450
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
      src='https://media.staticontent.com/media/pictures/c075a86b-ff6e-4e1b-80f7-c7c0dda9b991/300x200'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading fontSize='2xl'><b>Voos para Salvador</b></Heading>
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
          <Col md={9}>Hospedagem</Col>
          </Row>
        
       
        </Container>
      </Text>
      <Text color='green.600' fontSize='2xl'>
        $450
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
</Card></Col>
      </Row>
    </Container>
    
    </>
  );
};
  
  


export default CardVoos;
