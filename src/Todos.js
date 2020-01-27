import React from 'react';
import { connect } from 'react-redux';
import {ListGroup} from 'react-bootstrap';

function Todos(props){

  return(
    <ListGroup>
      {props.todos.map((element, index) => (
        <ListGroup.Item key={index} onClick={() => {
          props.task(index)
        }}>{element.task}</ListGroup.Item>
      ))}
    </ListGroup>
  )

}

const mapStateToProps = (store) => {
  console.log(store)
  return {
    todos: store.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    task: (index) => {
      dispatch({
        type: 'DELETE',
        payload: index
      });
    }
  };
}

const TodosConnected = connect (
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default TodosConnected;
