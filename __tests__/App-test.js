/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
const originalMessageChannel = global.MessageChannel;
global.MessageChannel = undefined;
const renderer = require('react-test-renderer');
global.MessageChannel = originalMessageChannel;

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  tree.unmount();
});
