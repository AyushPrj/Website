import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="text-center p-4">
              <Card.Body>
                <Card.Title>Welcome to Ayush's website!</Card.Title>
                <Card.Text>This is a simple website that I created using React and Bootstrap.</Card.Text>
                <Button variant="primary" href="#about">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src="https://source.unsplash.com/random/300x200?nature" />
              <Card.Body>
                <Card.Title>Nature</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="outline-secondary" href="#nature">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src="https://source.unsplash.com/random/300x200?city" />
              <Card.Body>
                <Card.Title>City</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="outline-secondary" href="#city">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
