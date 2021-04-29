import { newSpecPage } from '@stencil/core/testing';
import { MyScrollbutton } from '../my-scrollbutton';

describe('my-scrollbutton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyScrollbutton],
      html: `<my-scrollbutton></my-scrollbutton>`,
    });
    expect(page.root).toEqualHtml(`
      <my-scrollbutton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-scrollbutton>
    `);
  });
});
