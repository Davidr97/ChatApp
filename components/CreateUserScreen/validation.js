import { errors } from '../../redux/actions/errors';
import { rules } from '../../utilities/validateFields';

export const createUserValidation = {
    displayName : {
        [rules.REQUIRED] : errors.VALIDATION_DISPLAY_NAME_REQUIRED.errorCode
    },
    photoURL : {
        [rules.REQUIRED] : errors.VALIDATION_PHOTO_URL_REQUIRED.errorCode
    },
    email : {
        [rules.REQUIRED] : errors.VALIDATION_EMAIL_REQUIRED.errorCode
    },
    password : {
        [rules.REQUIRED] : errors.VALIDATION_PASSWORD_REQUIRED.errorCode
    }
};
