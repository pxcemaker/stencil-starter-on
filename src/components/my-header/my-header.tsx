import { Component,  h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'my-header',
  styleUrl: 'my-header.css',
  shadow: true,
})
export class MyHeader {

  @Prop() headerTitel:string;

  render() {
    return (<Host>
    
        <h1>{this.headerTitel}</h1>
        </Host>
    );
  }

}
