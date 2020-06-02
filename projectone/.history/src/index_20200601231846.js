import React,{Component} from 'react';
// adding comma and component in the above line allows us to remove react.Component(line 16) and just use the word component as displaye din line 16
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
// passing, rednering and displaying data in react
class BookReadCounter extends Component{
  render(){
    return (
      <section>
        <div>
    <p>Total Books: {this.props.total}</p>
    <div>
    <p>Horror: {this.props.horror}</p>
    </div>
    <div>
    <p>mystery: {this.props.mystery}</p>
    </div>
    <div>
    <p></p>
    </div>
        </div>
        Books Read
      </section>
    )
  }
}
// which makes things cleaner and allows you to skip out on havingto continiously create a new element with react. using jsx
ReactDOM.render(
 <BookReadCounter
 total={bookData.total}
 horror = {bookData.horror}
 goal = {bookData.goal}
 mystery = {bookData.mystery}
 />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
