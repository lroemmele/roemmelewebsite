import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
     render(){
          console.log("in react");
          return(
               <div>
                    <div className="card">
                    <img src="/images/profilepic.jpg" alt="Luke" style={{"width" :"100%"}} />
                    <h1>Luke Roemmele</h1>
                    <p className="title">Entry Level Develper</p>
                    <p>University of Phoenix</p>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <p><button>Contact</button></p>
                    </div>
               </div>
          );
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
