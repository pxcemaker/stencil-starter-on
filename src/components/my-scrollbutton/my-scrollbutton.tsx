import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-scrollbutton',
  styleUrl: 'my-scrollbutton.css',
  shadow: true,
})
export class MyScrollbutton {
  scrollToTop() {
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0;
  }
 render (){
  return (
    <Host>
      <div class="scroll-to-top">
          <button onClick={this.scrollToTop}>
            Nach oben
          </button>
      </div>
    </Host>);
  }
}