import { Component, Host, h, Prop, getAssetPath, State} from '@stencil/core';

@Component({
  tag: 'animal-card',
  styleUrl: 'animal-card.css',
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
    let toggleInfo =document.querySelector("animal-card").shadowRoot.querySelector("#toggle-info");
    let animalName =document.querySelector("animal-card").shadowRoot.querySelector("#animal-name");
    if(this.showInfo=="false"){
      this.showInfo="true";
      toggleInfo.innerHTML="Schließen";
      animalName.classList.replace("big-title", "small-title")
    
    }
    else{
      this.showInfo="false";
      toggleInfo.innerHTML="Mehr zeigen!";
      animalName.classList.replace("small-title", "big-title")
    }
  }
 

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img src= {getAssetPath(` ./assets/${this.image}`)} alt={this.animal}/>
          <div>
             <h3 id="animal-name"class="small-title">{this.animal}</h3>
            <div class={this.showInfo}>
              <p> <strong>Alter: </strong>{this.age}</p>
              <p><strong>Natürlicher Lebensraum: </strong> {this.habitat}</p>
              <p><strong>Gewicht: </strong>{this.weight}</p>
            </div>
            <button id="toggle-info" onClick={() => {this.handleMouseClick();}}>Schließen</button>
          </div>
        </div>
      </Host>
    );
  }

}
