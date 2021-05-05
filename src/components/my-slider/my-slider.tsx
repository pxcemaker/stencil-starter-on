import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-slider',
  styleUrl: 'my-slider.css',
  shadow: true,
})
export class MySlider {

  @Prop() image1:string = "giraffe.jpg";
  @Prop() image2:string = "nilpferd.jpg";
  @Prop() image3:string = "affe.jpg";

  /*componentDidLoad() {
    let counter = 1;
    setInterval(function(){
      const currentBtn = document.getElementById("radio" + counter) as HTMLInputElement;
      currentBtn.checked = true;
          counter++;
          if(counter > 3){
              counter = 1;
          }
      }, 3000);
  }*/
  render() {
    return (
      <Host>
        <div class="slider">
          <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
          
            <div class="slide first">
              <img src={this.image1} alt=""/>
            </div>
            <div class="slide">
              <img src={this.image2} alt=""/>
            </div>
            <div class="slide">
              <img src={this.image3} alt=""/>
            </div>

            <div class="navigation-auto">
              <div class="auto-btn1"></div>
              <div class="auto-btn2"></div>
              <div class="auto-btn3"></div>
            </div>

          </div>

            <div class="navigation-manual">
              <label htmlFor="radio1" class="manual-btn"></label>
              <label htmlFor="radio2" class="manual-btn"></label>
              <label htmlFor="radio3" class="manual-btn"></label>
            </div>

        </div>
      </Host>
    );
  }

}
