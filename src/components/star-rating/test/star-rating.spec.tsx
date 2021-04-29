import { newSpecPage } from '@stencil/core/testing';
import { StarRating } from '../star-rating';

describe('star-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarRating],
      html: `<star-rating></star-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <star-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </star-rating>
    `);
  });
});
