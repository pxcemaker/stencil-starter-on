import { newSpecPage } from '@stencil/core/testing';
import { MyFlipcard } from '../my-flipcard';

describe('my-flipcard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyFlipcard],
      html: `<my-flipcard></my-flipcard>`,
    });
    expect(page.root).toEqualHtml(`
      <my-flipcard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-flipcard>
    `);
  });
});
