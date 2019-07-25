import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: 'Note 1',
        description: 'Note 1 Description'
      },
      {
        id: 2,
        title: 'Note 2',
        description: 'Note 2 Description'
      },
      {
        id: 3,
        title: 'Note 3',
        description: 'Note 3 Description'
      }
    ]
  };
  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };
  render() {
    return (
      <div className='container'>
        <Header />
        <Notes notes={this.state.notes} />
        <br />
        <br />
        <AddNote addNote={this.addNote} />
        <Footer />
      </div>
    );
  }
}

export default App;
