import { newSpecPage } from '@stencil/core/testing';
import { MySlider } from '../my-slider';

describe('my-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySlider],
      html: `<my-slider></my-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <my-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-slider>
    `);
  });
});
