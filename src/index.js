import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let speech = "Good Morning";
let color = {color:"gray"};
const time = new Date(2021,3,10,18);

  if(time.getHours() <= 12){
    color.color = "gray"
  }else if(time.getHours() > 12 &&  time.getHours() <= 15){
    speech = "Good noon";
    color.color = "yellow"
  }
  else if(time.getHours() >15  &&  time.getHours() <= 18 ){
    speech = "Good afternoon";
    color.color = "red"
  }
  else if(time.getHours() >18){
    speech = "Good night";
    color.color = "black"
  }


ReactDOM.render(
  <>
  <div className="container">
    <span className="first">Hello sir, </span>
    <span style={color}>{speech}</span>
  </div>
  </> ,
  document.getElementById('root')
);