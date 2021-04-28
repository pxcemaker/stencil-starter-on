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
        <slot></slot>
        <button> {this.quesOpt}</button>
      </Host>
    );
  }

}
