import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    todo: '',
  }
  handleChange = (e) => {
      this.setState({
          todo:e.target.value
      })
  }
  handleSubmit = e => {
      e.preventDefault();
      this.props.addTodo(this.state.todo);
      this.setState({
          todo:''
    })
      


  };
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
           placeholder="Todo" 
           value={this.state.todo} 
           onChange = {this.handleChange}
           />
          <button>Add Todo</button>
        </form>

      </div>
    );
  }
}

export default AddTodo;
