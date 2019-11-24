import React from 'react';
import { rootReducer } from '../redux/reducers';
import { storeCreator } from '../redux/store';
import { Provider } from "react-redux";
import AppNavigator from './AppNavigator';



const store = storeCreator(rootReducer);


class ChatApp extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

export default ChatApp;
