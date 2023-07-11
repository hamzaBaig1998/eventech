import React from "react";
import FormInput from "../components/FormInput";
import Form from "../components/Form";
import TextArea from "../components/TextArea";
import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";

export default function Profile() {
    const accordian=[{id:"1",title:"Accordian 1", description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."},
    {id:"2",title:"Accordian 2", description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."},
    {id:"3",title:"Accordian 3", description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."},
    {id:"4",title:"Accordian 4", description:"It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."}];
  return (

    
    <div className="bg-crowd">
      <NavBar />
      
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 class="text-center mb-4">Profile</h1>
       
        <Accordion data={accordian}/>
</div>
      </div>
   
        
  );
}

