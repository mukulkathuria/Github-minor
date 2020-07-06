import styled from 'styled-components';

export const Head = styled.div`
    width:100%;
    background-color:#24292e;
    overflow:hidden;
    font-size:17px;
`;

export const HeadContainer = styled.div`
    width:92%;
    margin:auto 4%;
    /*color:hsla(0,0%,100%,.7); */
    color:#ffff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:65px;
`;

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    ul{
        list-style:none;
    }
    li{
        float:left;
        margin: auto 0.65em;
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
            padding: 5px;
            border:0.1px solid white;
            border-radius:5px;
            margin:auto 1em;
            font-size:1em;
        }
`;
export const Inputs = styled.input`
        margin-right:10px;
        background-color:#3f4448;
        padding:8px;
        font-size:1em;
        border:none;
        width:18rem;
        border-radius:5px;
        transition:1s;
        ::placeholder{
            color:#ffff;
        }
        &:focus{
            background-color:white;
            width:28rem;
            outline:none;
        }
`;