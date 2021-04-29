import { newE2EPage } from '@stencil/core/testing';

describe('my-links', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-links></my-links>');

    const element = await page.find('my-links');
    expect(element).toHaveClass('hydrated');
  });
});
