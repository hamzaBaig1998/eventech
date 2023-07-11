import React from "react";

export default function Accordion(props) {
  return(
     
    <div class="accordion w-100" id="accordionExample">
      {props.data.map(element => {
        return (<div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${element.id}`} aria-expanded="true" aria-controls={`collapse-${element.id}`}>
            {element.title}
          </button>
        </h2>
        <div id={`collapse-${element.id}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          {element.description}
          </div>
        </div>
      </div>)
      })}
    </div>  
);
}