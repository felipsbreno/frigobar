import { configure } from '@storybook/react';

configure(require.context('../stories', true, /\.stories\.jsx?$/), module);

configure(loadStories, module);
