import React, { Component } from 'react';
import uuid from 'uuid/v4';

class AddNote extends Component {
  state = {
    id: uuid(),
    title: '',
    description: '',
    errors: {}
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          title: 'please provide Title'
        }
      });
      return;
    }
    if (this.state.description === '') {
      this.setState({
        errors: {
          ...this.state.errors,
          title: '',
          description: 'please provide Description'
        }
      });
      return;
    }
    this.props.addNote(this.state);
    this.setState({
      id: '',
      title: '',
      description: '',
      errors: {}
    });
  };
  // handleDescriptionChange = e => {
  //   this.setState({
  //     description: e.target.value
  //   });
  // };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Description</label>
          <textarea
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            className='form-control'
          />
        </div>
        <button className='btn btn-secondary'>Submit</button>
      </form>
    );
  }
}

export default AddNote;
