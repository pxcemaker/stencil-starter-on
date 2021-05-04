import { newSpecPage } from '@stencil/core/testing';
import { MyCookie } from '../my-cookie';

describe('my-cookie', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCookie],
      html: `<my-cookie></my-cookie>`,
    });
    expect(page.root).toEqualHtml(`
      <my-cookie>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-cookie>
    `);
  });
});
