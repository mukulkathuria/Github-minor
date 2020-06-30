import styled from 'styled-components';

export const Head = styled.div`
    width:100%;
    background-color:#24292e;
    position:sticky;
    top:0;
    left:0;
`;

export const HeadContainer = styled.div`
    width:90%;
    margin:auto 5%;
    color:hsla(0,0%,100%,.7);
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:60px;
    a{
        text-decoration:none;
        color:inherit;
        margin:auto 1rem;
    }
`;
export const Navlinks = styled.div`
`;
export const DivStyle = styled.div`
        display:flex;
        align-items:center;
`;
export const Account = styled.div`
        poistion:relative;
        .account-details{
            position:absolute;
            z-index:1;
            background-color:white;
            color:black;
            border-radius:10px;
            line-height:2.5;
            right:5px;
            width:160px;
            text-align:center;
            display:none;
            div:hover{
                background-color:blue;
                color:white;
                border-radius:5px;
            }
        }
        .small{
            font-size:8px;
        }
        a{
            margin:0;
        }
        &:hover{
            cursor:pointer;
        }
        &:hover .account-details{
            display:block;
        }
`;
