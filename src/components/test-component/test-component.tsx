import { Component, Host, h, Prop, getAssetPath, State} from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
  assetsDirs:["assets"],
})
export class TestComponent {
  @State() showInfo:string;
  @Prop() image:string="Braunbaer.jpg"
  @Prop() animal:string="Braunbär"
  @Prop() age:number=23;
  @Prop() habitat:string="mountains"
  @Prop() weight:string="12 kg"

  handleMouseClick(){
    let toggleInfo =document.querySelector("test-component").shadowRoot.querySelector("#toggle-info");
    if(this.showInfo=="false"){
      this.showInfo="true";
      toggleInfo.innerHTML="Hide Info";
    }
    else{
      this.showInfo="false";
      toggleInfo.innerHTML="Show Info";
    }
    
  }
 

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img src= {getAssetPath(` ./assets/${this.image}`)} alt={this.animal}/>
          <div>
             <h3>{this.animal}</h3>
            <div class={this.showInfo}>
              <p> <strong>Alter: </strong>{this.age}</p>
              <p><strong>Natürlicher Lebensraum: </strong> {this.habitat}</p>
              <p><strong>Gewicht: </strong>{this.weight}</p>
            </div>
            <button id="toggle-info" onClick={() => {this.handleMouseClick();}}>Hide Info</button>
          </div>
        </div>
      </Host>
    );
  }

}
