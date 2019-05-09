import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    name: 'React Easy Code Storybook',
    url: 'https://github.com/KristofferTroncoso/react-easy-code',
    //goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    addonPanelInBottom: true,
    //sortStoriesByKind: false,
    //hierarchySeparator: /\./,
    //hierarchyRootSeparator: /\|/,
    //enableShortcuts: true,
  },
  backgrounds: [
    { name: 'dark', value: '#2d2d2d'},
    { name: 'KT', value: '#fff4ea'},
    { name: 'tomato', value: 'tomato'},
  ]
});

function loadStories() {
  require('../stories/index.tsx');
  //load additional stories here
}

configure(loadStories, module);