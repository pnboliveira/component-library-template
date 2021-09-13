import { newE2EPage } from '@stencil/core/testing';

describe('call-action-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<call-action-component></call-action-component>');

    const element = await page.find('call-action-component');
    expect(element).toHaveClass('hydrated');
  });
});
