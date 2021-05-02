import { newE2EPage } from '@stencil/core/testing';

describe('my-scrollbutton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-scrollbutton></my-scrollbutton>');

    const element = await page.find('my-scrollbutton');
    expect(element).toHaveClass('hydrated');
  });
});
