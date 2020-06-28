import React from 'react';
import {Formik ,Form ,Field , ErrorMessage} from 'formik';
import { InputDiv , Labels , Successbtn } from './Formstyle/signupstyle';
import intialValue from './FormValidation/initials';
import onSubmit from './FormValidation/handleSubmit';
import validate from './FormValidation/errorHandle';

class SignupForm extends React.Component {
    render(){
        return(
            <Formik
                initialValues = {intialValue}
                onSubmit={onSubmit}
                validate={validate}
                >
            <Form>
            <Labels>Usename </Labels>
            <InputDiv> <Field type='text'  name='username' 
            autoComplete='new-password' />
            <ErrorMessage name='username' /> 
            </InputDiv>

            <Labels>Email </Labels>
            <InputDiv> <Field type='email'  name='email' autoComplete='new-password' />
            <ErrorMessage name='email' /> 
            </InputDiv>
            
            <Labels>Password</Labels>
            <InputDiv><Field type='password' name='password' />
            <ErrorMessage name='password' />
            </InputDiv>
            <Successbtn type='submit'> 
            {this.props.issignup ? 'Create Account' : 'Sign Up for Github'}</Successbtn>
            </Form>
            </Formik>
        );
    }
}
export default SignupForm;