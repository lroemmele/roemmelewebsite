import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
     render(){
          console.log("in react");
          return(
               <div>React App</div>
          );
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
