import React from 'react';
import AboutUs from '../../containers/AboutUs';
import Sidebar from '../Sidebar';
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
  return(
    <div>
        <section className="contactUsContainer">
        <Card style={{width:'70%',height:'70%',marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
           <h1> contact us </h1>
           <form className="form">
             <section className="part1" >
             <input className="formName" type="text" placeholder="Name"></input>
               <input className="formEmail" type="text" placeholder="Email"></input>
             </section>

               <section className="part2" >
               <input className="fromMessage" type="text" placeholder="Message"></input>


               </section>
               <section className="form-button">
                 <button>Send</button>
               </section>
           </form>
                

        </Card>
          <Sidebar/>

        </section>
        
 
        
       

    </div>
   )

 }

export default ContactUs