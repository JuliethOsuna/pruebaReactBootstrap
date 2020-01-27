import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux'

class TodoListForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({task: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ', this.state);
    event.preventDefault();
    this.props.todos(this.state);
  }


  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do List</Form.Label>
          <Form.Control type="text" placeholder="Enter tasks to do" value={this.state.task} onChange={this.handleChange}/>
          <Form.Text className="text-muted">
            Enter your pending tasks
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (store) => {
  return {store};
}

const mapDispatchToProps = (dispatch) => {
  return {
    todos: (tasks) => {
      dispatch({
        type: 'ADD',
        payload: tasks
      })
    },
  }
}

const TodoListFormConnected = connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoListForm)

export default TodoListFormConnected;
