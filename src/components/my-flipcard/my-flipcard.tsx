import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-flipcard',
  styleUrl: 'my-flipcard.css',
  shadow: true,
})
export class MyFlipcard {
@State() cardClass: string;
@Prop({reflect: true, mutable: true}) turn: boolean;

turnCard() {
  this.turn ? (this.cardClass = 'card-back') : 'card';
  console.log ('Hier bin ich')
}

  render() {
    return (
      <Host>
        <div
        class={this.cardClass}
        onClick={() => {this.turnCard();}}>

          <div class="card-content">
            <div class="card-front">
              Hallo
            </div>
            <div class="card-back">
           Nein
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

