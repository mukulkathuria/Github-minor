import * as Yup from 'yup';

const validationSchema = Yup.object({
        email:Yup.string().email().required(),
        username:Yup.string().min(3).required(),
        password:Yup.string().min(3).required()
});

export default validationSchema;