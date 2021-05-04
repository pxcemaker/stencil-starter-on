import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {

@Prop() name: string;
@Prop() adresse: string;
@Prop() hausnummer: number;
@Prop() postleitzahl: number;
@Prop() stadt: string;
@Prop() impressum: string;
@Prop() datenschutz: string;
@Prop() kontakt: string;

  
    render() {
      return (
        <Host>
          <div class="footer">
            <div class="logo">
              <img src="zoo.png"></img>
            </div>
            <div class="data">
              <p>{this.name}</p>
              <p>{this.adresse} {this.hausnummer}</p>
              <p>{this.postleitzahl} {this.stadt}</p>
            </div>

            <div class="link">  
              <a href="#"><p>{this.kontakt}</p></a>
              <a href="#"><p>{this.impressum}</p></a>
              <a href="#"><p>{this.datenschutz}</p></a>
            </div>

            <div class="icons">
              <a href="#"><img src="facebook.png"></img></a>
              <a href="#"><img src="instagram.png"></img></a>
              <a href="#"><img src="twitter.png"></img></a>
            </div>
          </div>
        </Host>
      );
    }
  

}
