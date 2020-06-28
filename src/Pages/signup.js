import React from 'react';
import Header from '../Components/Header/header';
import SignupForm from '../Components/Signup/signupform';
import { DivContainer } from './PagesStyles/signupstyle';

const SignupPage = props =>{
    return(
        <div>
        <Header matched={props.match.isExact} />
        <DivContainer>
            <div className='container'>
                <div className='headingdesc'>
                <span>Join Github</span>
                <h2>Create your Account</h2>
                </div>
                <SignupForm issignup={props.match.isExact}/>
            </div>
        </DivContainer>
        </div>
    );
}
export default SignupPage;