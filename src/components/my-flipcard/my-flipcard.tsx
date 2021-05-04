import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-flipcard',
  styleUrl: 'my-flipcard.css',
  shadow: true,
})
export class MyFlipcard {
@Prop() frontText:string;
@Prop() backText:string;
@Prop({mutable:true,
reflect:true,})
@Prop() test:boolean

exampleHandler(ev:MouseEvent){
  console.log(ev)
  this.test=false;
  console.log("click")
  let test1 = document.querySelector("card-front")
  test1.classList.add("card-back")
}

  render() {
    return (
      <Host>
        <div class="card">
          <div class="content">
            <div class='card-side card-front' onClick={(ev)=>this.exampleHandler(ev)}>
              <h2 >{this.frontText}</h2>
            </div>
            <div class="card-side card-back">
              <p>{this.backText}</p>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
