import { createInputFieldsReducer } from '../../utilities/createInputFieldsReducer';

const initialState = {
    registerDisplayName : '',
    registerPhotoURL : '',
    registerEmail : '',
    registerPassword : ''
};

export const registerFieldsReducer = createInputFieldsReducer(initialState);
