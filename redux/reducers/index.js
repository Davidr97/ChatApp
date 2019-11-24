import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { messagesReducer } from './messagesReducer';
import { loginFieldsReducer } from './loginFieldsReducer';
import { registerFieldsReducer } from './registerFieldsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
    user : userReducer,
    messages : messagesReducer,
    loginFields : loginFieldsReducer,
    registerFields : registerFieldsReducer,
    users: usersReducer
});
