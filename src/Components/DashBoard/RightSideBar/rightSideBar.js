import React from 'react';
import {SideBar,Heading,RepoDiv,Lang} from './rightSidebarstyle';
import Datafile from '../../../Data/dashboardrightbar.json';

const RightSideBar = () =>{
    return(
        <SideBar>
            <Heading>Explore repositories</Heading>
            {Datafile.map(list => 
                <RepoDiv key={list.id}>
                <div className='title'>{list.title}</div>
                <div>{list.body}</div>
                <Lang><div className='mark' /><div className='small'>{list.lang}</div></Lang>
                <hr />
            </RepoDiv>
                )}
        </SideBar>
    );
}
export default RightSideBar;