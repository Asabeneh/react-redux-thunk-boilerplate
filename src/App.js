import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/todoActions';
import {
  addOne,
  minusOne,
  addFive,
  addAnyNumber,
} from './actions/operationActions';
import {fetchPosts} from './actions/postActions';

import './App.css';

class AddAnyNumber extends Component {
  state = {
    text: '',
  };
  handleSubmit = e => {
    e.preventDefault ();
    this.props.addAnyNumber (Number (this.state.text));
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add number .. "
          value={this.state.text}
          onChange={e =>
            this.setState ({
              text: e.target.value,
            })}
        />
        <button>Add Any</button>
      </form>
    );
  }
}

class App extends Component {
  state = {
    users: [],
  };
  componentDidMount () {
    this.props.fetchPosts ();
  }

  render () {
    // console.log (this.props.posts.posts);
    console.log (this.props.post.posts);
    return (
      <div className="App">
        <h1>Welcome to React Redux</h1>
        <AddAnyNumber addAnyNumber={this.props.addAnyNumber} />
        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
        <button onClick={this.props.addFive}>Add Five</button>

        <h4>Count:{this.props.count}</h4>
        <p>Number of posts:{this.props.post.posts.length}</p>
        {this.props.post.posts.map (post => (
          <ul>
            <li>{post.body}</li>
            <li>{post.title}</li>
            <li>{post.id}</li>
          </ul>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count,
    post: state.post,
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     addOne: () => dispatch (addOne),
//     minusOne: () => dispatch (minusOne),
//     addFive: () => dispatch (addFive),
//     addAnyNumber: n => dispatch (addAnyNumber (n)),
//   };
// };
export default connect (mapStateToProps, {
  addOne,
  minusOne,
  addFive,
  addAnyNumber,
  fetchPosts,
}) (App);
