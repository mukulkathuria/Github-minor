import React from 'react';
import SignInForm from '../Components/SignIn/signin';
import { DivContainer ,Heading } from './PagesStyles/signinstyle';
import { Link } from 'react-router-dom';

const SigninPage = () => {
    return(
        <div>
        <DivContainer>
            <Heading>
            <h2>Sign in to Github</h2>
            </Heading>
        <SignInForm />
        <div className='signup'>
        <span>New to github ? <Link to='/sign-up'>Create your account</Link></span>
        </div>
        </DivContainer>
        </div>
    )
}
export default SigninPage;