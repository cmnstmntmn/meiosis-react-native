/**
 * @format
 */

import React from 'react';
import meiosisTracer from 'meiosis-tracer';
import {AppRegistry} from 'react-native';
import {Root, root} from './app/Root';
import {name as appName} from './app.json';
import meiosis from 'meiosis-setup';
import merge from 'mergerino';

const {states, actions} = meiosis.mergerino.setup({
  stream: meiosis.simpleStream,
  merge,
  app: {
    initial: {
      ...root.initial(appName),
    },
    Actions: (update) => ({
      ...root.Actions(update),
    }),
    services: [],
    Effects: (update) => [],
  },
});

// Only for using Meiosis Tracer in development.
if (process.env.NODE_ENV === 'development') {
  console.info('Starting Meiosis Tracer');
  meiosisTracer({streams: [{stream: [], label: `${appName} - state`}]});
}

const App = meiosis.react.setup({React, Root});
const app = () => <App states={states} actions={actions} />;

AppRegistry.registerComponent(appName, () => app);
