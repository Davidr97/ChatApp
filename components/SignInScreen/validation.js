import { errors } from '../../redux/actions/errors';
import { rules } from '../../utilities/validateFields';

export const signInValidation = {
    email : {
        [rules.REQUIRED] : errors.VALIDATION_EMAIL_REQUIRED.errorCode
    },
    password : {
        [rules.REQUIRED] : errors.VALIDATION_PASSWORD_REQUIRED.errorCode
    }
};
