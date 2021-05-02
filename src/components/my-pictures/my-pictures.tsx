import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-pictures',
  styleUrl: 'my-pictures.css',
  shadow: true,
})
export class MyPictures {

  
  render() {
    return (
      <Host>
       <div class="card">
		      <div class="turned-card">
		    	  <div class="card-side card-front">
				      <h2>vorne</h2>
			      </div>
			    <div class="card-side card-back">
						<h2>hinten</h2>
						<p>Lorem ipsum</p>
          </div>
			</div>
		</div>
      </Host>
    );
  }

}
