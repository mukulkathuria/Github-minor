import React from 'react';
import Logo from '../../../images/logo.png';
import {
    Head, HeadContainer, Navlinks,
    DivStyle, Account
} from './dashheadstyle';
import { Link, Redirect } from 'react-router-dom';
import { Auth } from '../../../Contexts/AuthContext';
import { FaUserAlt } from 'react-icons/fa';

const Dashhead = () => {
    const [auth, changeauth] = React.useContext(Auth);
    const handleClick = () => {
        changeauth({ data: null });
    }
    if (!auth.data) return <Redirect to='/' />
    return (
        <Head>
            <HeadContainer>
                <DivStyle>
                    <Link to='/' className='nomargin'><img src={Logo} alt='logo' /></Link>
                    <input type='text' placeholder='Search Github' />
                    <Navlinks>
                        <a href='/'>Pull request</a>
                        <a href='/'>Issues</a>
                        <a href='/'>Marketplace</a>
                        <a href='/'>Explore</a>
                    </Navlinks>
                </DivStyle>
                <Account>
                    <FaUserAlt color='white' />
                    <div className='account-details'>
                        <div><div className='small'>Signed as</div> {auth.data.name}</div>
                        <Link to='/' onClick={() => handleClick()}><div>Log Out</div></Link>
                    </div>
                </Account>
            </HeadContainer>
        </Head>
    );
}
export default Dashhead;