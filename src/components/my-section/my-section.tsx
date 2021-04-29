import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-section',
  styleUrl: 'my-section.css',
  shadow: true,
  assetsDirs: ['assets']
})


export class MySection {

  @Prop() image;
  @Prop() text;
  @Prop() headline;

  render() {
    return (
      <Host>
        
        <div class="section">

        <div class="text">
            <h1>{this.headline}</h1>
            <p>{this.text}</p>    
        </div>

        <div class="image"> 
          <a href="#"><img src={this.image}></img></a>
        </div>        
        
    </div>

      </Host>
    );
  }

}
