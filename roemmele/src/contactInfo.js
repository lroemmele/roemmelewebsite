import React, { Component } from 'react';

class Contact extends Component{
     render(){
          return(
               <div>
                    <ul style={{"listStyle":"none", "paddingLeft": "0"}}>
                         <li><a href="tel:[267-893-0426]"><span className="bottom">267-893-0426</span></a></li>
                         <li><a href="mailto:lroemmele@gmail.com"> lroemmele@gmail.com </a></li>
                    </ul>
               </div>
          );
     }
}
export default Contact
