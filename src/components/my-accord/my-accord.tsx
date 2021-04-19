import { Component, Host, h, Prop,  Listen ,Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-accord',
  styleUrl: 'my-accord.css',
  shadow: true,
})
export class MyAccord {
  @Prop() titelAccord: string ="";

  @Event() openAccord: EventEmitter<string>;
 
    @Listen("click")
  wurdeGelickt1(){
    "clicked"
  }
  exampleHandler2(ev: MouseEvent) {
    console.log("es springt hier rein aber funkt net")
    console.log(ev)
    let acc = document.querySelector('accordion')
    acc.classList.replace("accordion", "active")
    this.openAccord.emit("custom value");
    
  }
  
  
  
didCompLoad(){
  console.log("it is successfully loaded, your accordeon")
}

 
  render() {
    return (
      <Host>  
        <h2> {this.titelAccord} </h2>
         <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>

<div class="accordion" onClick={(ev)=>this.exampleHandler2(ev)}>Section 3</div>
<div class="panel">
  <p>Lorem ipsum...</p>
</div> 
      </Host>
    );
  }

}
/*this.openAccord.emit("custom value");
    
    let acc = document.getElementsByClassName("accordion");
    let i:number;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel 
    this.classList.toggle("active");

    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });}
  } Toggle between hiding and showing the active panel */
