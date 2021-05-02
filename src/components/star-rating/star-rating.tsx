import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'star-rating',
  styleUrl: 'star-rating.css',
  shadow: true,
})
export class StarRating {

  @State() value:number;

  giveStarRating(el:number){
 this.value=el;
 alert("Danke für Ihre Bewertung! Sie haben uns " + this.value +" Sterne gegeben")
  }

  render() {
    return (
      <Host>
        <div id="star-wrapper">
          <h3 class="please-rate">Bitte bewerten Sie uns!</h3>
          <div class="star-rating">
          <div onClick={()=>{ this.giveStarRating(5)}}>
            <input type="radio" name="rating" id="5-stars" value="5"/>
            </div>
            <label htmlFor="5-stars"class="star">&#9733;</label>
            <div onClick={()=>{ this.giveStarRating(4)}}>
            <input type="radio" name="rating" id="4-stars" value="4"/>
            </div>
            <label htmlFor="4-stars"class="star">&#9733;</label>
            <div onClick={()=>{ this.giveStarRating(3)}}>
            <input type="radio" name="rating" id="3-stars" value="3"/>
            </div>
            <label htmlFor="3-stars"class="star">&#9733;</label>
            <div onClick={()=>{ this.giveStarRating(2)}}>
            <input type="radio" name="rating" id="2-stars" value="2"/>
            </div>
            <label htmlFor="2-stars"class="star">&#9733;</label>
            <div onClick={()=>{ this.giveStarRating(1)}}>
            <input type="radio" name="rating" id="1-stars" value="1"/>
            </div>
            <label htmlFor="1-stars"class="star">&#9733;</label>
          </div>
        </div>
      </Host>
    );
  }

}
