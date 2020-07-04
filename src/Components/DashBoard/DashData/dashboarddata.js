import React from 'react';
import {
    DivContainer,
    StyleDiv, ProfileImg,
    MojorBody,
    MajorBodyStatus,
    MinorBody, StyleBody, Bodypart1,BorderLine
} from './dashdatastyle';
import Datafile from '../../../Data/dashboard.json';

const DashData = () => {
    return (
        <DivContainer>
            {Datafile.map(list =>
            <BorderLine key={list.id} >
                <StyleDiv>
                    <ProfileImg><img src={list.img1} alt='' /></ProfileImg>
                    <MojorBody>
                        <MajorBodyStatus>{list.status}<span className='timestamp'>yesterday</span></MajorBodyStatus>
                        <MinorBody>
                            <Bodypart1>
                                <ProfileImg><img src={list.img2} alt='' /></ProfileImg>
                                <StyleBody>
                                    <div className='headings'>{list.title}</div>
                                    <div>{list.body}</div>
                                    <div className='small'>{list.repo > 0 && `${list.repo} repositories`} 
                                    {list.followers > 0 && ` ${list.followers} followers`}</div>
                                </StyleBody>
                            </Bodypart1>
                            <button>Follow</button>
                        </MinorBody>
                    </MojorBody>
                </StyleDiv>
                {list.id < Datafile.length && <hr />}
             </BorderLine>
            )}
        </DivContainer>
    );
}
export default DashData;