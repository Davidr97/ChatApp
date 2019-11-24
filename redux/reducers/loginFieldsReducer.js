import { createInputFieldsReducer } from '../../utilities/createInputFieldsReducer';
import { actions } from '../actions/constants';

const initialState = {
    loginEmail : '',
    loginPassword : ''
};

const actionHandlers = {
    [actions.CLEAR_LOGIN_FIELDS] : () => initialState
};

export const loginFieldsReducer = createInputFieldsReducer(initialState, actionHandlers);
