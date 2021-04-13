import { newE2EPage } from '@stencil/core/testing';

describe('my-gallery', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-gallery></my-gallery>');

    const element = await page.find('my-gallery');
    expect(element).toHaveClass('hydrated');
  });
});
