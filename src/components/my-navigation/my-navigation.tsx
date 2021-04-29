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



  render() {
    return (
      <Host>
        <nav>
        <div class="navigation">
        <a href="#"><p>{this.Bewertung}</p></a>
        <a href="my-contact"><p>{this.Kontakt}</p></a>
        <a href="my-gallery"><p>{this.Galerie}</p></a>
        <a href="my-section"><p>{this.Informationen}</p></a>
        <a href="my-header"><p>{this.Startseite}</p></a>
        </div>        
        </nav>


      </Host>
    );
    
  }
  
}


