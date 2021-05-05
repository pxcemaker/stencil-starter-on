import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-links',
  styleUrl: 'my-links.css',
  shadow: true,
})
export class MyLinks {

@Prop() text1:string;
@Prop() text2:string ;

  render() {
    return (
      <Host>
        
        <div class="all">
          <a href="#">
            <div class="section1">
                <p>{this.text1}</p>
            </div>
          </a>
        
          <a href="#">
            <div class="section2">
                <p>{this.text2}</p>
            </div>
          </a>
        </div>

      </Host>
    );
  }

}
