import React from 'react';
import Logo from '../../images/logo.png';
import {Head , HeadContainer , Nav ,SignComp ,Inputs} from './headerstyle';
import { Link } from 'react-router-dom';

const Header = props =>{
    return(
        <Head>
            <HeadContainer>
            <Nav>
            <Link to='/' ><img src={Logo} alt='logo' /></Link>
                <ul>
                    <li>Why Github</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Explore</li>
                    <li>Marketplace</li>
                    <li>Pricing</li>
                </ul>
                </Nav>
                <SignComp>
                    <Inputs type='text' placeholder='Search Github' />
                    <Link to='/sign-in'>Sign In</Link>
                    {props.matched ? null :<button><Link to='/sign-up'>Sign Up</Link></button>}
                </SignComp>
            </HeadContainer>
        </Head>
    );
}
export default Header;