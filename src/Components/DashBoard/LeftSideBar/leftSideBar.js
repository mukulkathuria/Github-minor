import React from 'react';
import {SideBar ,User ,SideLinks,Teams} from './leftSidebarstyle';
import {Auth} from '../../../Contexts/AuthContext';
import { FaUserAlt } from 'react-icons/fa';
import { BsLock } from 'react-icons/bs';
import {GoRepo} from 'react-icons/go';

const LeftSideBar = () =>{
    const [auth] = React.useContext(Auth);
    return(
        <SideBar>
            <User><FaUserAlt />{auth.data.name}</User>
            <hr />
            <SideLinks>
                <div>
                    <div className='flex'>
                        <div>Repositories</div>
                        <button><GoRepo />New</button>
                    </div>
                    <input type='text' placeholder='Find a repository' />
                </div>
                <ul>
                    <li><BsLock /><a href='adnaj'>Somelink</a></li>
                    <li><BsLock /><a href='dbh'>Somelink</a></li>
                    <li><BsLock /><a href='dh'>Somelink</a></li>
                    <li><BsLock /><a href='fu'>Somelink</a></li>
                </ul>
                <div className='showmore'>Show more</div>
            </SideLinks>
            <hr />
            <Teams>
                <span>Your teams</span>
                <div>You don't belong to any team yet</div>
            </Teams>
        </SideBar>
    );
}
export default LeftSideBar;