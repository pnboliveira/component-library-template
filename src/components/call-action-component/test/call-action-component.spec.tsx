import { newSpecPage } from '@stencil/core/testing';
import { CallActionComponent } from '../call-action-component';

describe('call-action-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CallActionComponent],
      html: '<call-action-component></call-action-component>',
    });
    expect(page.root).toEqualHtml(`
      <call-action-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </call-action-component>
    `);
  });
});
