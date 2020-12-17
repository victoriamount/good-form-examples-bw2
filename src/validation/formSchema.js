import * as yup from 'yup';

export default yup.object().shape({
    username: yup
        .string()
        .required('username is required'),
    primaryemail: yup
        .string()
        .required('email is required'),
    password: yup
        .string()
        .required('password is required'),
    phone: yup
        .string()
        .required('phone number is required')
})