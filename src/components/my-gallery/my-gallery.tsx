import { Component, Host, h,  State,  } from '@stencil/core';


@Component({
  tag: 'my-gallery',
  styleUrl: 'my-gallery.css',
  shadow: true,
})

export class MyGallery {

@State() items: string[] = ["affe.jpg", "https://via.placeholder.com/150"];
//@State() internalItems: string[];

/*componentWillLoad() {
  this.parseOptions();
}

@Watch('items')
parseOptions() {
  if (this.items) {
    this.internalItems = JSON.parse(this.items);
  }
}
*/
  render() {

    return (
      
      <Host>

    <div class="gallery">
          
            <div class="item1">
              <a href={this.items[0]}><img src={this.items[0]}></img></a>
            </div>

            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>
            
            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>
            
             <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>

            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>
            
            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>

            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>
            
            <div class="item1">
              <a href={this.items[1]}><img src={this.items[1]}></img></a>
            </div>

           
            
            
      </div>

      </Host>

    )}
    
}
