import React from 'react';
import { Inputs,Labels ,InputGroup ,SuccessBtn} from './signinstyle';

class SignInForm extends React.Component{
    render(){
        return(
            <form>
                <InputGroup>
                <Labels>Username or emailaddress</Labels>
                <Inputs type='text' name='username' autoComplete='new-password' />
                </InputGroup>

                <InputGroup>
                <Labels>Password</Labels>
                <Inputs type='password' name='password' autoComplete='new-password' />
                </InputGroup>
                
                <SuccessBtn type='submit'>Sign In</SuccessBtn>
            </form>
        );
    }
}
export default SignInForm;