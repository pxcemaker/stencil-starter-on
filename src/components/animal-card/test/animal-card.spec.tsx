import { newSpecPage } from '@stencil/core/testing';
import { AnimalCard } from '../animal-card';

describe('animal-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AnimalCard],
      html: `<animal-card></animal-card>`,
    });
    expect(page.root).toEqualHtml(`
      <animal-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </animal-card>
    `);
  });
});
