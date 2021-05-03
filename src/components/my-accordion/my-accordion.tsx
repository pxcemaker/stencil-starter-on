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


 clickHandler() {
    
    this.isOpen= false

  }

  render() {
    return (
      
      <Host class={this.isOpen ? 'accordion' : 'hide'}>
   <div class="accordion" onClick={this.clickHandler}>
       <p> {this.accordText}</p>
     </div>
   
     </Host>
      
      
      
      
      
      
      /*div class={this.accOpen ? 'accordion' : 'panel'} onClick={(ev)=>this.exampleHandler2(ev)}> Section 1
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>
       </div>*/
        
      
    );
  }

}
