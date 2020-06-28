import styled from 'styled-components';

export const Head = styled.div`
    width:100%;
    background-color:#24292e;
    overflow:hidden;
`;

export const HeadContainer = styled.div`
    width:90%;
    margin:auto 5%;
    color:hsla(0,0%,100%,.7);
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
`;

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    ul{
        list-style:none;
    }
    li{
        float:left;
        margin: auto 1rem;
    }
`;
export const SignComp = styled.div`
        display:flex;
        align-items:center;
        a{
            text-decoration:none;
            color:inherit;
        }
        button{
            background-color:inherit;
            color:inherit;
            padding: 12px;
            border:0.2px solid white;
            border-radius:5px;
            margin:auto 1rem;
        }
`;