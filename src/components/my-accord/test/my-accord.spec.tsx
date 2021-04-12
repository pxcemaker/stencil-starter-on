import { newSpecPage } from '@stencil/core/testing';
import { MyAccord } from '../my-accord';

describe('my-accord', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAccord],
      html: `<my-accord></my-accord>`,
    });
    expect(page.root).toEqualHtml(`
      <my-accord>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-accord>
    `);
  });
});
