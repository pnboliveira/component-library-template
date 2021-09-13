import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'call-action-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'call-action-component.spec.tsx',
      'call-action-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <call-action-component></call-action-component>
`;
