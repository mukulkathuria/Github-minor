import React from 'react';
import {SideBar ,User ,SideLinks,Teams} from './leftSidebarstyle';
import {Auth} from '../../../Contexts/AuthContext';
import { FaUserAlt } from 'react-icons/fa';
import { BsLock } from 'react-icons/bs';

const LeftSideBar = () =>{
    const [auth] = React.useContext(Auth);
    return(
        <SideBar>
            <User><FaUserAlt />{auth.data.name}</User>
            <hr />
            <SideLinks>
                <ul>
                    <li><BsLock />Somelink</li>
                    <li><BsLock />Somelink</li>
                    <li><BsLock />Somelink</li>
                    <li><BsLock />Somelink</li>
                </ul>
            </SideLinks>
            <hr />
            <Teams>
                <span>Your Teams</span>
                <div>You dont belong to any team yet</div>
            </Teams>
        </SideBar>
    );
}
export default LeftSideBar;