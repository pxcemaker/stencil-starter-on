import { newSpecPage } from '@stencil/core/testing';
import { MyAlertbutton } from '../my-alertbutton';

describe('my-alertbutton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAlertbutton],
      html: `<my-alertbutton></my-alertbutton>`,
    });
    expect(page.root).toEqualHtml(`
      <my-alertbutton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-alertbutton>
    `);
  });
});
