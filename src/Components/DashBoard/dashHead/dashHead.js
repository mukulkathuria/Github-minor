import React from 'react';
import Logo from '../../../images/logo.png';
import {
    Head, HeadContainer, 
    Navlinks,
    DivStyle, Account
} from './dashheadstyle';
import { Link, Redirect } from 'react-router-dom';
import { Auth } from '../../../Contexts/AuthContext';
import { FaUserAlt } from 'react-icons/fa';
import { BsBell , BsPlus ,BsFillCaretDownFill} from 'react-icons/bs';

const Dashhead = () => {
    const [auth, changeauth] = React.useContext(Auth);
    const handleClick = () => {
        changeauth({ data: null });
    }

    const[accdetail,statechange]= React.useState(false);
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
                    <BsBell color='inherit' />
                    <BsPlus color='inherit' className='plus'/>
                    <BsFillCaretDownFill color='inherit' className='arrow'/>
                    <div className='user' onClick={() => statechange(!accdetail)}>
                        <FaUserAlt color='white' />
                        <BsFillCaretDownFill color='inherit' className='arrow' />
                        {accdetail && 
                        <div className='account-details'>
                            <div>Signed as</div>
                            <div>{auth.data.name}</div>
                            <Link to='/' onClick={() => handleClick()}><div>Log Out</div></Link>
                        </div>
                        }
                    </div>
                </Account>
            </HeadContainer>
        </Head>
    );
}
export default Dashhead;