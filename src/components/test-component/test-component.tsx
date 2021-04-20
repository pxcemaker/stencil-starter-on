import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
})
export class TestComponent {
  @Prop() animal:String;
  @Prop() infotext:String;

  render() {
    return (
      <Host>
        <div class="animal-card">
          <img ></img>
          <div>
            <h3></h3>
            <div class="info">
              <p>Beschreibung</p>
            </div>
            <button id="toggle-info">Show Info</button>
          </div>
        </div>
      </Host>
    );
  }

}
