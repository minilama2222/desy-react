import type { Preview } from '@storybook/react-vite'
import './styles/storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    },
    docs: {
      toc: true
    }
  },
};

export default preview;
