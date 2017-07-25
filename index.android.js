/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry} from 'react-native';

import Main from './Component/Main/Main';

class XMGBuy extends React.Component {
  render() {
    return (<Main/>);
  }
}

AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
