import { newSpecPage } from '@stencil/core/testing';
import { MyCookies } from '../my-cookies';

describe('my-cookies', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCookies],
      html: `<my-cookies></my-cookies>`,
    });
    expect(page.root).toEqualHtml(`
      <my-cookies>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-cookies>
    `);
  });
});
