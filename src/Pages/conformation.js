import React from 'react';
import { DivCenter } from './PagesStyles/confirmationstyle';
import { Link } from 'react-router-dom';

const Confirmation = props => {
    return(
        <DivCenter>
        <h1>Thank You For Applying</h1>
        <Link to='/'><button>Go Back</button></Link>
        </DivCenter>
    );
}
export default Confirmation;