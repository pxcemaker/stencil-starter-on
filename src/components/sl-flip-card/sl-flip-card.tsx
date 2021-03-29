import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'sl-flip-card',
  styleUrl: 'sl-flip-card.css',
  shadow: true,
})
export class SlFlipCard {
  @State() slCardClasses: string;

  @Prop({ reflect: true, mutable: true }) slTurnable: boolean;

  handleMouseEnter() {
    this.slTurnable ? (this.slCardClasses = 'sl-card sl-card-mouseenter') : 'sl-card';
  }

  handleMouseLeave() {
    this.slCardClasses = 'sl-card';
  }

  render() {
    return (
      <Host>
        <div
          class={this.slCardClasses}
          onMouseEnter={() => {
            this.handleMouseEnter();
          }}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div class="sl-content">
            <div class="sl-front">
              <slot name="sl-front"></slot>
            </div>
            <div class="sl-back">
              <slot name="sl-back"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
