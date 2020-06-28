import React from 'react';
import Logo from '../../../images/logo.png';
import {Head , HeadContainer} from './dashheadstyle';
import { Link, Redirect } from 'react-router-dom';
import {Auth} from '../../../Contexts/AuthContext';

const Dashhead = () =>{
    const [auth,changeauth] = React.useContext(Auth);
    console.log(auth);

    const handleClick = () =>{
        changeauth({data:null});
    }
    if(!auth.data) return <Redirect to='/' />
    return(
        <Head>
            <HeadContainer>
            <Link to='/' ><img src={Logo} alt='logo' /></Link>
            <div>
            {auth.data && `Hi ${auth.data.name}`}
            <Link to='/' onClick={() => handleClick()}>Log Out</Link>
            </div>
            </HeadContainer>
            </Head>
    );
}
export default Dashhead;