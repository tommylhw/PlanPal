/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GluestackUIProvider} from './gluestack/ui/gluestack-ui-provider';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import './global.css';
import Theme from './src/theme/theme';
import RootNavigator from './src/navigators/RootNavigator';
import {Provider} from 'react-redux';
import store from './src/stores/store';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider mode="light">
      <Provider store={store}>
        <Theme>
          <RootNavigator />
        </Theme>
      </Provider>
    </GluestackUIProvider>
  );
}

export default App;
