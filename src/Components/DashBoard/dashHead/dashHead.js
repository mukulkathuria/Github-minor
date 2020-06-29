import React from 'react';
import Logo from '../../../images/logo.png';
import {Head , HeadContainer,Navlinks,DivStyle} from './dashheadstyle';
import { Link, Redirect } from 'react-router-dom';
import {Auth} from '../../../Contexts/AuthContext';

const Dashhead = () =>{
    const [auth,changeauth] = React.useContext(Auth);
    const handleClick = () =>{
        changeauth({data:null});
    }
    if(!auth.data) return <Redirect to='/' />
    return(
        <Head>
            <HeadContainer>
                <DivStyle>
                <Link to='/' ><img src={Logo} alt='logo' /></Link>
                    <Navlinks>
                        <a href='/'>Pull request</a>
                        <a href='/'>Issues</a>
                        <a href='/'>Marketplace</a>
                        <a href='/'>Explore</a>
                    </Navlinks>
                </DivStyle>
            <div>
            {auth.data && `Hi ${auth.data.name}`}
            <Link to='/' onClick={() => handleClick()}>Log Out</Link>
            </div>
            </HeadContainer>
            </Head>
    );
}
export default Dashhead;