import { Component, Host, h, Prop, Method} from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {
  @Prop() animal:String="Giraffe"
  @Prop() age:Number=23;
  @Prop() habitat:String="mountains"
  @Prop() weight:String="12 kg"

  
  showInfo:Boolean=false;

  @Method()

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = document.querySelector('.info');
    const toggleBtn = document.querySelector('#toggle-info');

    if(this.showInfo) {
      /*info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';*/
    } else {
      /*info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';*/
    }
  }


  

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img ></img>
          <div>
             <h3>{this.animal}</h3>
            <div class="info">
              <p> Wird bis zu {this.age} Jahre alt</p>
              <p>Natürlicher Wohnraum: {this.habitat}</p>
              <p>Durchschnitliches Gewicht: {this.weight}</p>
            </div>
            <button id="toggle-info">Show Info</button>
          </div>
        </div>
      </Host>
    );
  }

}
