import * as Yup from 'yup';

const validationSchema = Yup.object({
        email:Yup.string().email().required('Required'),
        username:Yup.string().min(3).required('Required'),
        password:Yup.string().min(3).required('Required')
});

export default validationSchema;