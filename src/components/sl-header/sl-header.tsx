import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'sl-header',
  styleUrl: 'sl-header.css',
  shadow: true,
})
export class SlHeader {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) slDarkMode: boolean; //HTML-Attribut sl-dark-mode

  getAllLinks() {
    const jsx = [];

    const slotEl = this.el.querySelector('[slot="sl-header-links"]');
    if (slotEl) {
      slotEl.querySelectorAll<HTMLLinkElement>('a').forEach(link => {
        jsx.push(
          <a href={link.href}>
            <p>{link.innerText}</p>
          </a>,
        );
      });
    }
    return jsx;
  }

  getHeaderClasses() {
    return this.slDarkMode ? 'sl-header sl-dark-header' : 'sl-header sl-light-header';
  }

  render() {
    return (
      <Host>
        <div class={this.getHeaderClasses()}>
          <div>
            <h3>Logo</h3>
          </div>
          {this.getAllLinks().map(link => link)}
        </div>
      </Host>
    );
  }
}
