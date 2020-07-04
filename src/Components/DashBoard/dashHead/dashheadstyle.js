import styled from 'styled-components';

export const Head = styled.div`
    width:100%;
    background-color:#24292e;
    position:sticky;
    top:0;
    left:0;
`;

export const HeadContainer = styled.div`
    width:96%;
    margin:auto 2%;
    color:white;
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
        .nomargin{
            margin:0;
        }
        img{
            margin-right:10px;
        }
        input{
        background-color:#3f4448;
        padding:5px;
        border:none;
        width:14rem;
        border-radius:5px;
        transition:1s;
        ::placeholder{
            color:white;
        }
        &:focus{
            background-color:white;
            outline:none;
            width:20rem;
        }
    }
`;
export const Account = styled.div`
        poistion:relative;
        .account-details{
            position:absolute;
            z-index:1;
            background-color:white;
            color:black;
            border-radius:10px;
            line-height:2;
            right:5px;
            width:160px;
            display:none;
            a div:hover{
                background-color:blue;
                color:white;
                border-radius:5px;
            }
        }
        .small{
            font-size:12px;
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
