import { newE2EPage } from '@stencil/core/testing';

describe('my-accord', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-accord></my-accord>');

    const element = await page.find('my-accord');
    expect(element).toHaveClass('hydrated');
  });
});
