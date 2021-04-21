import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-cookies',
  styleUrl: 'my-cookies.css',
  shadow: true,
})


export class MyCookies {
  @Prop() titel: string ="TEST123"
  render() {
    return (
      <Host>
        <h1>HAllO{this.titel}</h1>
        <slot></slot>
      </Host>
    );
  }

}
