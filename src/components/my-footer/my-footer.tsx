import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-footer',
  styleUrl: 'my-footer.css',
  shadow: true,
})
export class MyFooter {

@Prop() Name: string;
@Prop() Adresse: string;
@Prop() Hausnummer: number;
@Prop() Postleitzahl: number;
@Prop() Stadt: string;
@Prop() Impressum: string;
@Prop() Datenschutz: string;
@Prop() Kontakt: string;

  
    render() {
      return (
        <Host>
          <div class="footer">
            <div class="logo">
              <img src="zoo.png"></img>
            </div>
            <div class="data">
              <p>{this.Name}</p>
              <p>{this.Adresse} {this.Hausnummer}</p>
              <p>{this.Postleitzahl} {this.Stadt}</p>
            </div>

            <div class="link">  
              <a href="#"><p>{this.Kontakt}</p></a>
              <a href="#"><p>{this.Impressum}</p></a>
              <a href="#"><p>{this.Datenschutz}</p></a>
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
