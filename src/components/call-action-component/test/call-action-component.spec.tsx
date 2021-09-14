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
        <div>
        <div class="container">
          <h1 class="headline">CtA - Main Conversion</h1>
        </div>
        <div class="content">
          <div class="mainText">
            <div class="container">
              <h2>A wonderful serenity has taken possession</h2><br /><br />
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole heart.
              </p><br /><br />
              <button class="btn">Contact Us</button>
            </div>
          </div>
          <div class="sidebar">
            <img src="https://www.stockvault.net/data/2016/03/23/189996/preview16.jpg" alt="Man on a Mountain" />
          </div>
        </div>

        <div class="dropdown">
          <div class="container">
            <h1>Contact Us</h1>
            <div class="close-btn">&times;</div>
          </div>
        </div>
      </div>
        </mock:shadow-root>
      </call-action-component>
    `);
  });
});
