import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() quesOpt: string;

  render() {
    return (
      <Host>
        <button> {this.quesOpt}</button>
      </Host>
    );
  }

}
