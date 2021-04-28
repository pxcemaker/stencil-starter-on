import { newSpecPage } from '@stencil/core/testing';
import { MyLinks } from '../my-links';

describe('my-links', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyLinks],
      html: `<my-links></my-links>`,
    });
    expect(page.root).toEqualHtml(`
      <my-links>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-links>
    `);
  });
});
