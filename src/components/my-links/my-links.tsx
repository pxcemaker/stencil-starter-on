import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-links',
  styleUrl: 'my-links.css',
  shadow: true,
})
export class MyLinks {

@Prop() text1;
@Prop() text2;

  render() {
    return (
      <Host>
        
        <div class="all">
          <a href="#">
            <div class="section1">
                <p>aquarium</p>
            </div>
          </a>
        
          <a href="#">
            <div class="section2">
                <p>tierpark</p>
            </div>
          </a>
        </div>

      </Host>
    );
  }

}
