import * as Yup from 'yup';

export const signUpFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    username: Yup.string()
        .required('Name is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    acceptTermsandConditions: Yup.bool()
        .oneOf([true], 'You must accept our terms & conditions')
});


export const loginFormSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
});