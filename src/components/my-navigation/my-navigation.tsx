import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'my-navigation',
  styleUrl: 'my-navigation.css',
  shadow: true,
})

export class MyNavigation {
 
  @Prop() Galerie: string
  @Prop() Startseite: string
  @Prop() Informationen: string
  @Prop() Kontakt: string
  @Prop() Bewertung: string

  Kontaktlink() {
    document.documentElement.scrollTop = 2200;
  }

  Bewertungslink() {
    document.documentElement.scrollTop = 2700;
  }

  Galerielink() {
    document.documentElement.scrollTop = 1100;
  }

  Informationenlink() {
    document.documentElement.scrollTop = 3000;
  }

  Startseitenlink() {
    document.documentElement.scrollTop = 0;
  }


  render() {
    return (
      <Host>
        <nav>
        <div class="navigation">
        <a onClick={this.Bewertungslink}><p>{this.Bewertung}</p></a>
        <a onClick={this.Kontaktlink}><p>{this.Kontakt}</p></a>
        <a onClick={this.Galerielink}><p>{this.Galerie}</p></a>
        <a onClick={this.Informationenlink}><p>{this.Informationen}</p></a>
        <a onClick={this.Startseitenlink}><p>{this.Startseite}</p></a>
        </div>        
        </nav>

      
      </Host>
    );
    
  }
  
}