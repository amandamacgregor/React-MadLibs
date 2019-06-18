import React, {Component} from 'react';
import Result from './Result.js'
import Form from './Form.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: "Bob",
        favMovie: "superbad"
      }
  }
  updateGreeting = (name) => {
    this.setState({name: name})
  }
  
  updateMovie = (favMovie) => {
    this.setState({favMovie: favMovie})
  }
  
  render() {
    return (
      <div>
        <div>
          <Result name={this.state.name} favMovie={this.state.favMovie}/>
          <Form
            name={this.state.name}
            favMovie={this.state.favMovie}
            updateGreeting={this.updateGreeting}
           updateMovie={this.updateMovie}

          />
        </div>
      </div>
      )
  }
}

export default App;
