
const isEmpty = field => field.trim() === "";

export const rules = {
    REQUIRED : "required"
};

export const validationRules = {
    [rules.REQUIRED] : isEmpty
};

export const validateFields = (validation, fieldsObj) => {
    return Object
        .keys(validation)
        .reduce(((validationObj, field) => {
            const errors =
                Object
                .keys(validation[field])
                .reduce((errors, rule) => {
                    const validate = validationRules[rule];
                    if(validate(fieldsObj[field])){
                        return [
                            ...errors,
                            validation[field][rule]
                        ]
                    }else return [
                        ...errors
                    ]
                }, []);
            return {
                ...validationObj,
                [field] : errors
            }
        }), {})
};

export const getValidationErrorCode = (validation, fieldsObj) => {
    const errorsObj = validateFields(validation, fieldsObj);
    const errorsArr = Object
        .values(errorsObj)
        .reduce((arr, errorArr) => ([
            ...arr,
            ...errorArr
        ]),[]);
    return errorsArr.length === 0 ? null : errorsArr[0];
};
