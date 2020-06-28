import React from 'react';
import { DivContainer ,StyleDiv} from './dashdatastyle';
import axios from 'axios';


const DashData = () =>{
    const [data,changedata] = React.useState({userdata:null});
    React.useEffect( () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => changedata({userdata:res.data.filter((list,i) => i<5)}));
    },[]);
    return(
        data.userdata &&
        <DivContainer>
            {data.userdata.map(list => <StyleDiv key={list.id}>
                <p>{list.body}</p>
                </StyleDiv>)}
        </DivContainer>
    );
}
export default DashData;