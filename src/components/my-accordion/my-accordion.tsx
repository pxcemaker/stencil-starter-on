import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.css',
  shadow: true,
})
export class MyAccordion {
  @Prop({mutable:true,
  reflect:true,})
  @Prop() accOpen:boolean = true;


  exampleHandler2(ev: MouseEvent) {
    console.log("es springt hier rein aber funkt net")
    console.log(ev)
    /*const target = ev.target as HTMLElement
    let acc = target
    .closest<HTMLDivElement>(".accordion")
    acc.classList.add("size")*/
    this.accOpen= false

    


  }

  render() {
    return (
      
         <div class={this.accOpen ? 'accordion' : 'panel'}  onClick={(ev)=>this.exampleHandler2(ev)}> Section 1
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>
       </div>
        
      
    );
  }

}
