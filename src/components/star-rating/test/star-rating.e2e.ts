import { newE2EPage } from '@stencil/core/testing';

describe('star-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<star-rating></star-rating>');

    const element = await page.find('star-rating');
    expect(element).toHaveClass('hydrated');
  });
});
