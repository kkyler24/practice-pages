import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

let bookData = {
  total:50,
  horror:30,
  mystery:20,
  goal: 70

}

class BookReadCounter extends React.Component{
  render(){
    return (
      <section>
        Books Read
      </section>
    )
  }
 

}

 
// renders the items listed to the DOM, putting elements directly in this area is using tag based syntax , which makes things cleaner and allows you to skip out on havingto continiously create a new element with react. using jsx
ReactDOM.render(
  // This can contain as many properties as you like 
 <Message color= "teal"
 minutes= {5}
  msg="How are you?"/>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();