import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-flipcard',
  styleUrl: 'my-flipcard.css',
  shadow: true,
})
export class MyFlipcard {
@Prop() frontText:string;
@Prop() backText:string;

  render() {
    return (
      <Host>
        <div class="card">
          <div class="content">
            <div class="card-side card-front">
              <h2>{this.frontText}</h2>
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
