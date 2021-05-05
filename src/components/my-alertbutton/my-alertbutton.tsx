import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-alertbutton',
  styleUrl: 'my-alertbutton.css',
  shadow: true,
})
export class MyAlertbutton {

  makeAlert(){
    alert("Ob geruhsam wie das Faultier, grazil wie die Giraffe oder flink wie ein Erdmännchen – im Zoo findet jeder ein passendes krabbelndes, kletterndes oder kriechendes Patentier.");
  }

  render() {
    return (
      <Host>
        <div class="alertButton">
          <button onClick={this.makeAlert}>
            Erfahre mehr über eine Tierpatenschaft!
          </button>
      </div>
      </Host>
    );
  }

}
