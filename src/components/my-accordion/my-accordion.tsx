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


 exampleHandler(ev: MouseEvent) {
    
    console.log(ev)
    this.isOpen= false

    


  }

  render() {
    return (
      
      <Host class={this.isOpen ? 'showRadio' : 'hide'}>
   <div class="accordion" onClick={(ev)=>this.exampleHandler(ev)}>
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
