import { handleActions } from 'redux-actions';
import { actions } from '../actions/constants';


export const messagesReducer = handleActions({
    [actions.MESSAGES_RECEIVED] : (state, action) => {
        const { messages } = action.payload;
        return messages
    }
}, []);
