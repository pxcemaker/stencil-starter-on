import { newE2EPage } from '@stencil/core/testing';

describe('my-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-contact></my-contact>');

    const element = await page.find('my-contact');
    expect(element).toHaveClass('hydrated');
  });
});
