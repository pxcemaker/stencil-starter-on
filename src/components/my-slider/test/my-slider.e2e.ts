import { newE2EPage } from '@stencil/core/testing';

describe('my-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-slider></my-slider>');

    const element = await page.find('my-slider');
    expect(element).toHaveClass('hydrated');
  });
});
