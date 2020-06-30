import React from 'react';
import { DivContainer ,
    StyleDiv,ProfileImg,
    MojorBody,
    MajorBodyStatus,
    MinorBody,StyleBody,Bodypart1} from './dashdatastyle';
import Datafile from '../../../Data/dashboard.json';

const DashData = () =>{
    
    return(
        <DivContainer>
            {Datafile.map(list =>
                <StyleDiv key={list.id}>
                <ProfileImg><img src={list.img1} alt='' /></ProfileImg>
                <MojorBody>
                    <MajorBodyStatus>{list.status}</MajorBodyStatus>
                    <MinorBody>
                        <Bodypart1>
                    <ProfileImg><img src={list.img2} alt='' /></ProfileImg>
                        <StyleBody>
                        <div className='headings'>{list.title}</div>
                        <div>{list.body}</div>
                        </StyleBody>
                        </Bodypart1>
                        <button>follow</button>
                        </MinorBody>
                </MojorBody>
             </StyleDiv>
                )}
        </DivContainer>
    );
}
export default DashData;