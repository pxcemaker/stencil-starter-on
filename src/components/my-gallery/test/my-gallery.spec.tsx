import { newSpecPage } from '@stencil/core/testing';
import { MyGallery } from '../my-gallery';

describe('my-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyGallery],
      html: `<my-gallery></my-gallery>`,
    });
    expect(page.root).toEqualHtml(`
      <my-gallery>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-gallery>
    `);
  });
});
