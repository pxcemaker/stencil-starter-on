import { newE2EPage } from '@stencil/core/testing';

describe('animal-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<animal-card></animal-card>');

    const element = await page.find('animal-card');
    expect(element).toHaveClass('hydrated');
  });
});
