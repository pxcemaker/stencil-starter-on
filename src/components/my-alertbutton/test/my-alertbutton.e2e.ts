import { newE2EPage } from '@stencil/core/testing';

describe('my-alertbutton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-alertbutton></my-alertbutton>');

    const element = await page.find('my-alertbutton');
    expect(element).toHaveClass('hydrated');
  });
});
