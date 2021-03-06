import React from 'react';

export const Auth = React.createContext();

export const Authentication = props => {
        const [auth,changeauth] = React.useState({
            data:null
        });
    return(
            <Auth.Provider value={[auth,changeauth]}>
                {props.children}
            </Auth.Provider>
    );
};