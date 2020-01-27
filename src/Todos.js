import React from 'react';
import { connect } from 'react-redux';
import {ListGroup} from 'react-bootstrap';

function Todos(props){

  return(
    <ListGroup>
      {props.todos.map((element, index) => (
        <ListGroup.Item key={index}>{element.task}</ListGroup.Item>
      ))}
    </ListGroup>
  )

}

const mapStateToProps = (store) => {
  return {
    todos: store.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const RatingsConnected = connect (
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default RatingsConnected;
