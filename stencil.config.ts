import { Config } from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  namespace: 'togglebutton',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: 'http://localhost:3000',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
