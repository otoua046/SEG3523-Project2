import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import './index.css';

function Programs({ name, location, hours, martial_art, id}) {
    return (
      <Card className='m-2' style={{ width: '26rem', margin: 'auto', display: 'block' }}>
      
        <ListGroup variant="flush">
          <ListGroup.Item className='title'>{name}</ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Location:</Col>
              <Col>{location}</Col>
            </Row>
            <Row>
              <Col>Hours:</Col>
              <Col>{hours}</Col>
            </Row>
            <Row>
              <Col>Martial Art:</Col>
              <Col>{martial_art}</Col>
            </Row>
            <Container className='programs-container'>
                <Button onClick={() => {const select = document.querySelector('#package-select'); select.value = name; window.scrollTo(0, document.body.scrollHeight);}} className='programs-btn' variant="primary">Enroll</Button>
            </Container>
          </ListGroup.Item>
        </ListGroup>
        
      </Card>
    );
}

    

export default Programs;