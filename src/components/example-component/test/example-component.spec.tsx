import { createSpecComponent, getChild } from '../../../../testing';
import { ExampleComponent } from '../example-component';

describe('example-component', () => {
  it('renders', async () => {
    const content = getChild(await createSpecComponent('example-component', ExampleComponent));

    expect(content).toEqualHtml(`
      <div>
        <h1>
          A little component to show you cool stuff
        </h1>
        <p>
          Here we use a Knob to play with this component in the preview:
          <slot></slot>
        </p>
      </div>
    `);
  });
});
