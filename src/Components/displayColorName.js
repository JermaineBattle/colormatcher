import React from 'react';
//Function for the typing function of the App
//controls the change of text while typing
//props.color is the color being shown
//input is targetting the value of what is typed
function DisplayColorName(props){
let typeColor = {
  color: props.color,
  marginTop: ".5em",
  marginBottom:".5em"
}
  return (
    <div>
      <h2 style = {typeColor} >{props.color}</h2>
      <input
        style ={props.changeIt}
        className = "inputField"
        onChange= {props.typer}
        type = "text"
        placeholder ="white"
        />
    </div>
  );
}

export default DisplayColorName;
