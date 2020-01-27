import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TodoListForm from './TodoListForm';
import Todos from './Todos';

const Main = props => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <TodoListForm />
        </Col>
        <Col sm={4}>
          <Todos />
        </Col>
      </Row>
    </Container>
  )
}

export default Main;
