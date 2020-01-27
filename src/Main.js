import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TodoListForm from './TodoListForm';

const Main = props => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <TodoListForm />
        </Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  )
}

export default Main;
