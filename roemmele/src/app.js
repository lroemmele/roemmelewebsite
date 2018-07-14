import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contact from './contactInfo';

class App extends Component {
     constructor(){
          super();
          this.state = {
               render:null,
               contact: ''
          }
     }


     handleClick(e){
          if (this.state.render == null){
               this.setState({
                    render: true,
                    contact: <Contact/>
               })
          }else{
               this.setState({
                    render:null,
                    contact:''
               })
          }

     }

     render(){

          return(
               <div>
                    <div className="card">
                         <img src="/images/profilepic.jpg" alt="Luke" style={{"width" :"100%"}} />
                         <h1>Luke Roemmele</h1>
                         <p className="title">Entry Level Develper</p>
                         <p>University of Phoenix</p>

                         <form method="get" action="assets/New Resume.docx">
                              <button className="btn btn-success" type="submit button">Download Resume</button>
                         </form>

                         <a href="https://www.linkedin.com/in/luke-roemmele-b9716465/"><i className="fa fa-linkedin" style={{"margin" : "10px"}}></i></a>
                         <a href="#"><i className="fa fa-facebook"></i></a>
                         <p><button className="btn btn-primary"  type="button"
                         onClick={this.handleClick.bind(this)}>Contact</button></p>

                         {this.state.contact}

                    </div>
               </div>
          );
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));
