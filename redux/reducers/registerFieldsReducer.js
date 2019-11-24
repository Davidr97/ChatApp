import { createInputFieldsReducer } from '../../utilities/createInputFieldsReducer';
import { actions } from '../actions/constants';

const initialState = {
    registerDisplayName : '',
    registerPhotoURL : '',
    registerEmail : '',
    registerPassword : ''
};

const actionHandlers = {
    [actions.CLEAR_REGISTRATION_FIELDS] : () => initialState
};

export const registerFieldsReducer = createInputFieldsReducer(initialState, actionHandlers);
