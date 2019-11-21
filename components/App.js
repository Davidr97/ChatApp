import React from 'react';
import { combineReducers } from 'redux';
import { userReducer } from '../redux/reducers/userReducer';
import { messagesReducer } from '../redux/reducers/messagesReducer';
import { loginFieldsReducer } from '../redux/reducers/loginFieldsReducer';
import { registerFieldsReducer } from '../redux/reducers/registerFieldsReducer';
import { storeCreator } from '../redux/store';
import { Provider } from "react-redux";
import { Text } from "react-native";


const rootReducer = combineReducers({
    user : userReducer,
    messages : messagesReducer,
    loginFields : loginFieldsReducer,
    registerFields : registerFieldsReducer
});

const store = storeCreator(rootReducer);


class ChatApp extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <Text>
                    Main app
                </Text>
            </Provider>
        );
    }
}

export default ChatApp;
