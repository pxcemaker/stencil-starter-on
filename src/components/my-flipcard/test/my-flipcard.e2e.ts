import { newE2EPage } from '@stencil/core/testing';

describe('my-flipcard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-flipcard></my-flipcard>');

    const element = await page.find('my-flipcard');
    expect(element).toHaveClass('hydrated');
  });
});
