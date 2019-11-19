
export const errors = {
    EMAIL_ALREADY_IN_USE : {
        errorCode : "auth/email-already-in-use",
        errorMessage : "There already exists an account with the given email address"
    },
    INVALID_EMAIL : {
        errorCode : "invalid-email",
        errorMessage : "The email address is not valid"
    },
    OPERATION_NOT_ALLOWED : {
        errorCode : "auth/operation-not-allowed",
        errorMessage : "Email/password accounts are not enabled"
    },
    WEAK_PASSWORD : {
        errorCode : "auth/weak-password",
        errorMessage : "The password is not strong enough"
    },
    REGISTRATION_FAILED : {
        errorMessage : "Registration failed"
    }
};


