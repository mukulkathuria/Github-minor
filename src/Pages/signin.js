import React from 'react';
import Header from '../Components/Header/header';
import SignInForm from '../Components/SignIn/signin';
import { DivContainer } from './PagesStyles/signinstyle';
import { Link } from 'react-router-dom';

const SigninPage = () => {
    return(
        <div>
        <Header />
        <DivContainer>
        <SignInForm />
        <div className='signup'>
        <span>New to github ? <Link to='/sign-up'>Create your account</Link></span>
        </div>
        </DivContainer>
        </div>
    )
}
export default SigninPage;