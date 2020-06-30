import React from 'react';
import Dashhead from '../Components/DashBoard/dashHead/dashHead';
import DashData from '../Components/DashBoard/DashData/dashboarddata';
import LeftSideBar from '../Components/DashBoard/LeftSideBar/leftSideBar';
import RightSideBar from '../Components/DashBoard/RightSideBar/rightSideBar';
import {Auth} from '../Contexts/AuthContext';
import {Redirect} from 'react-router-dom';

const DashBoard = () =>{
    const [auth] = React.useContext(Auth);
    if(!auth.data) return <Redirect to='/' />
    
    return(
        <div>
           <Dashhead />
           <LeftSideBar />
           <RightSideBar />
           <DashData />
        </div>
    );
}
export default DashBoard;