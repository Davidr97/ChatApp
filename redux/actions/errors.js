
export const errors = {
    AUTH_EMAIL_ALREADY_IN_USE : {
        errorCode : "auth/email-already-in-use",
        errorMessage : "There already exists an account with the given email address"
    },
    AUTH_INVALID_EMAIL : {
        errorCode : "auth/invalid-email",
        errorMessage : "The email address is not valid"
    },
    AUTH_OPERATION_NOT_ALLOWED : {
        errorCode : "auth/operation-not-allowed",
        errorMessage : "Email/password accounts are not enabled"
    },
    AUTH_WEAK_PASSWORD : {
        errorCode : "auth/weak-password",
        errorMessage : "The password is not strong enough"
    },
    AUTH_REGISTRATION_FAILED : {
        errorCode : "auth/registration-failed",
        errorMessage : "Registration failed"
    },
    AUTH_USER_DISABLED : {
        errorCode : "auth/user-disabled",
        errorMessage : "The email address has been disabled"
    },
    AUTH_USER_NOT_FOUND : {
        errorCode : "auth/user-not-found",
        errorMessage : "The user does not exist"
    },
    AUTH_WRONG_PASSWORD : {
        errorCode : "auth/wrong-password",
        errorMessage : "The password is invalid for the given email"
    },
    VALIDATION_EMAIL_REQUIRED : {
        errorCode : "validation/required-email",
        errorMessage : "The email address must not be empty"
    },
    VALIDATION_PASSWORD_REQUIRED : {
        errorCode : "validation/required-password",
        errorMessage : "The password must not be empty"
    },
    VALIDATION_DISPLAY_NAME_REQUIRED : {
        errorCode : "validation/required-display-name",
        errorMessage : "The display name must not be empty"
    },
    VALIDATION_PHOTO_URL_REQUIRED : {
        errorCode : "validation/required-photo-url",
        errorMessage : "The photo url must not be empty"
    }
};

export function getErrorMessage(code){
    return Object
        .values(errors)
        .filter(({errorCode}) => errorCode === code)[0]
        .errorMessage;
}


