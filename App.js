/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { combineReducers } from 'redux';
import { userReducer } from './redux/reducers/userReducer';
import { storeCreator } from './redux/store';
import { Provider } from "react-redux";
import CreateUser from './containers/CreateUser';
import SignIn from './containers/SignIn';

const rootReducer = combineReducers({
    user: userReducer
});

const store = storeCreator(rootReducer);



const App: () => React$Node = () => {
  return (
        <Provider store={store}>
            <SignIn/>
        </Provider>
  );
};

export default App;
