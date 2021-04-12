import { Component, Host, h, Prop,  Listen ,Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-accord',
  styleUrl: 'my-accord.css',
  shadow: true,
})
export class MyAccord {
  @Prop() titelAccord: string;

  @Event() openAccord: EventEmitter<string>;
  

  @Listen("click")
  wurdeGelickt(){
    "clicked"
  }
  exampleHandler2(ev:MouseEvent) {

      console.log(ev + "yesss")
      this.openAccord["dajsdj"]
  }
didCompLoad(){
  console.log("it is successfully loaded, your accordeon")
}
  render() {
    return (
      <Host>
        <div class="cool">
        {this.openAccord && <h2> {this.titelAccord} </h2>} 
        <slot>sdlkfsl</slot>
        
          <button onClick=
        {(ev)=>this.exampleHandler2(ev)}>read more</button>
      </div>
      </Host>
    );
  }

}
