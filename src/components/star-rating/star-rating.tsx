import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'star-rating',
  styleUrl: 'star-rating.css',
  shadow: true,
})
export class StarRating {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
