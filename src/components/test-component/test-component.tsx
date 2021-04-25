import { Component, Host, h, Prop, Element, getAssetPath} from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
  assetsDirs:["assets"],
})
export class TestComponent {
  @Prop() image:String="Braunbaer.jpg"
  @Prop() animal:String="Braunbär"
  @Prop() age:Number=23;
  @Prop() habitat:String="mountains"
  @Prop() weight:String="12 kg"

  @Element() el :HTMLElement;

  


  hideInfo() {

    console.log("hallohallo");

    let info = this.el.querySelector<HTMLDivElement>(".info");
    info.classList.add(".hide");
    
  }




  

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img src= {getAssetPath(` ./assets/${this.image}`)} alt="test"/>
          <div>
             <h3>{this.animal}</h3>
            <div class="info">
              <p> <strong>Alter: </strong>{this.age}</p>
              <p><strong>Natürlicher Lebensraum: </strong> {this.habitat}</p>
              <p><strong>Gewicht: </strong>{this.weight}</p>
            </div>
            <button id="toggle-info" onMouseOver={this.hideInfo} >Show Info</button>
          </div>
        </div>
      </Host>
    );
  }

}
