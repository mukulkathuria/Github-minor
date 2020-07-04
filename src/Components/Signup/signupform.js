import React from 'react';
import {Formik ,Form ,Field , ErrorMessage} from 'formik';
import { InputDiv , Labels , Successbtn ,SmallDiv} from './Formstyle/signupstyle';
import intialValue from './FormValidation/initials';
import validationSchema from './FormValidation/errorHandle';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SignupForm extends React.Component {
    state ={
        form:null
    }
    onSubmit = values =>{
        axios.post(' https://jsonplaceholder.typicode.com/users',values)
        .then(res => { this.setState({form:true});}).catch(err => console.log(err));
    }
    render(){
        if(this.state.form) return <Redirect to='/confirmation' />
        return(
            <Formik
                initialValues = {intialValue}
                onSubmit={this.onSubmit}
                validationSchema={validationSchema}
                >
                {formik =>(
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
                    <SmallDiv>Make sure it's at least 15 characters OR at least 8 characters 
                        including a number and a lowercase letter.</SmallDiv>
                    </InputDiv>
                    <Successbtn type='submit' disabled={!formik.isValid || formik.isSubmitting}> 
                    {this.props.issignup ? 'Create Account' : 'Sign Up for Github'}</Successbtn>

                    <SmallDiv>By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement.
                         We’ll occasionally send you account related emails.</SmallDiv>
                    </Form>
                )}
            </Formik>
        );
    }
}
export default SignupForm;