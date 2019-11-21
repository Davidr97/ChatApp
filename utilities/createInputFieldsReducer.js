import { handleActions } from 'redux-actions';
import { actions } from '../redux/actions/constants';

export function createInputFieldsReducer(initialState){
    return handleActions({
        [actions.ON_TEXT_CHANGED] : (state, action) => {
            const { name, text } = action.payload;
            if(state.hasOwnProperty(name)){
                return {
                    ...state,
                    [name] : text
                }
            }
            return state
        }
    }, initialState);
}
