import { newE2EPage } from '@stencil/core/testing';

describe('my-cookies', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-cookies></my-cookies>');

    const element = await page.find('my-cookies');
    expect(element).toHaveClass('hydrated');
  });
});
