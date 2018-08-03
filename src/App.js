import React, { Component } from 'react';
import DisplayColorName from './Components/displayColorName';
import './App.css';
import './Components/colorViewer.css';

class App extends Component{
  constructor(props){
    super(props);
    //Set initialState to WHITE
    this.state = {
      colors: [
        {
          color: 'white'
        }
      ]
    }}

//Used to change the text-color dynamically while the user types
handleChangeName =(event) =>{
  this.setState(
    {
      colors: [
        {
        color: event.target.value
       }
     ]
    }
  )}
//RENDER and RETURN BEGINS
  render() {
    //used to change the color of the background//
    let formStyle = {
      backgroundColor: this.state.colors[0].color,
    };
    //used to change color of the text//
    let typeColor = {
      color: this.state.colors[0].color
    };
    return (
      <div style = {formStyle} className="App">
       <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'/>
       <div className = "content" >
          <form  className = "form">
            <br />
            <div className ="circle" style ={formStyle}/>
            <h1>Type <br/>ANY color...</h1>
            <DisplayColorName
              typer={this.handleChangeName}
              reader={this.handleReadColor}
              color={this.state.colors[0].color}
            />
            <p>
              <i>Hexadecimal and RGB values ACCEPTED</i>
            </p>
            <div className ="circle2" style ={formStyle}/>
          </form>
         </div>
        </div>
      );
    }
  }

export default App;
