import { createInputFieldsReducer } from '../../utilities/createInputFieldsReducer';

const initialState = {
    loginEmail : '',
    loginPassword : ''
};

export const loginFieldsReducer = createInputFieldsReducer(initialState);
