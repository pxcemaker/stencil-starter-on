import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-gallery',
  styleUrl: 'my-gallery.css',
  shadow: true,
})
export class MyGallery {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
