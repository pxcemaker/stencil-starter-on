import { newSpecPage } from '@stencil/core/testing';
import { MyContact } from '../my-contact';

describe('my-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContact],
      html: `<my-contact></my-contact>`,
    });
    expect(page.root).toEqualHtml(`
      <my-contact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-contact>
    `);
  });
});
