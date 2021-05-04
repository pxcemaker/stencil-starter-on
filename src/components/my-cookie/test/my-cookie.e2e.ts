import { newE2EPage } from '@stencil/core/testing';

describe('my-cookie', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-cookie></my-cookie>');

    const element = await page.find('my-cookie');
    expect(element).toHaveClass('hydrated');
  });
});
