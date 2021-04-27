import { newSpecPage } from '@stencil/core/testing';
import { MySection } from '../my-section';

describe('my-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySection],
      html: `<my-section></my-section>`,
    });
    expect(page.root).toEqualHtml(`
      <my-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-section>
    `);
  });
});
