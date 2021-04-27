import { newE2EPage } from '@stencil/core/testing';

describe('my-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-section></my-section>');

    const element = await page.find('my-section');
    expect(element).toHaveClass('hydrated');
  });
});
