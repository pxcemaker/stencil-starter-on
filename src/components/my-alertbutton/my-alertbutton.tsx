import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-alertbutton',
  styleUrl: 'my-alertbutton.css',
  shadow: true,
})
export class MyAlertbutton {

  makeAlert(){
    alert("test");
  }

  render() {
    return (
      <Host>
        <div class="alertButton">
          <button onClick={this.makeAlert}>
            Test
          </button>
      </div>
      </Host>
    );
  }

}
