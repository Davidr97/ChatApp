/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { combineReducers } from 'redux';
import { userReducer } from './redux/reducers/userReducer';
import { storeCreator } from './redux/store';
import { userRequestRegistrationPassed, userRequestRegistrationFailed} from './redux/actions';

const rootReducer = combineReducers({
    user: userReducer
});

const store = storeCreator(rootReducer);
store.dispatch(userRequestRegistrationFailed('asd'));
const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();

const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
        <Text>
          Welcome abroad
        </Text>
    </View>
  );
};

export default App;
