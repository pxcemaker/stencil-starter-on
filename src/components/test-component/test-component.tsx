import { Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {
  @Prop() image:String="../images/Braunbaer.jpg"
  @Prop() animal:String="Giraffe"
  @Prop() age:Number=23;
  @Prop() habitat:String="mountains"
  @Prop() weight:String="12 kg"

  
  /*showInfo:Boolean=false;

  @Method()

  toggleInfo() {

    const info = document.querySelector('.info');
    const toggleBtn = document.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }*/


  

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img src="{this.image}" alt="{this.animal}"/>
          <div>
             <h3>{this.animal}</h3>
            <div class="info">
              <p> <strong>Alter: </strong>{this.age}</p>
              <p><strong>Natürlicher Lebensraum: </strong> {this.habitat}</p>
              <p><strong>Gewicht: </strong>{this.weight}</p>
            </div>
            <button id="toggle-info">Show Info</button>
          </div>
        </div>
      </Host>
    );
  }

}
