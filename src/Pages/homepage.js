import React from 'react';
import Header from '../Components/Header/header';
import { DivContainer,Heading , Headdesc ,SignForm ,Home} from './PagesStyles/homepagestyle';
import SignupForm from '../Components/Signup/signupform';
import {Auth} from '../Contexts/AuthContext';

const Homepage = () =>{
    const [auth] = React.useContext(Auth);
    console.log(auth);
    return(
        <Home>
            <Header />
            <DivContainer>
                <Heading>
                    <Headdesc>
                        <h2>
                            Build for Developers
                        </h2>
                    </Headdesc>
                    <p>GitHub is a development platform inspired by the way you work. 
                        From open source to business, you can host and review code, 
                        manage projects, and build software alongside 50 million developers.
                    </p>
                </Heading>
                <SignForm><SignupForm /></SignForm>
            </DivContainer>
        </Home>
    );
}
export default Homepage;