import { Component, h, Prop,Host } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.css',
  shadow: true,
})
export class MyAccordion {
  @Prop({mutable:true,
  reflect:true,})
  @Prop() isOpen:boolean;
  @Prop() accordText: string;



 clickHandler(ev: MouseEvent) {
    
    console.log(ev)
   
    this.isOpen =true;
    console.log(this.isOpen)

  }

  clickHandler2(ev: MouseEvent) {
    
    console.log(ev)
   
    this.isOpen =false;
    console.log(this.isOpen)

  }


  render() {
    return (
      
      <Host>
        <my-button ques-opt="Wie lange hat unser ZOO offen und ist er für Schulklassen geeignet ?" onClick={(ev)=>this.clickHandler(ev)}></my-button>
   <div class={this.isOpen ? 'accordion' : 'hide'} onClick={(ev)=>this.clickHandler2(ev)}>
       <p> {this.accordText}</p>
     </div>
     
   
     </Host>
      
  
        
      
    );
  }

}
