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
        <div id="star-wrapper">
          <h3 class="please-rate">Bitte bewerten Sie uns!</h3>
          <div class="star-rating">
            <input type="radio" name="rating" id="5-stars" value="5"/>
            <label htmlFor="5-stars"class="star">&#9733;</label>
            <input type="radio" name="rating" id="4-stars" value="4"/>
            <label htmlFor="4-stars"class="star">&#9733;</label>
            <input type="radio" name="rating" id="3-stars" value="3"/>
            <label htmlFor="3-stars"class="star">&#9733;</label>
            <input type="radio" name="rating" id="2-stars" value="2"/>
            <label htmlFor="2-stars"class="star">&#9733;</label>
            <input type="radio" name="rating" id="1-stars" value="1"/>
            <label htmlFor="1-stars"class="star">&#9733;</label>
          </div>
        </div>
      </Host>
    );
  }

}
