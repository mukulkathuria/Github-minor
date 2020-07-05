import styled from 'styled-components';

export const Head = styled.div`
    width:100%;
    background-color:#24292e;
    position:sticky;
    top:0;
    left:0;
    z-index:9;
    font-size:12px;
`;

export const HeadContainer = styled.div`
    width:98%;
    margin:auto 1%;
    color:white;
    display:flex;
    height:45px;
    justify-content:space-between;
    align-items:center;
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
            width:2em;
        }
        input{
        background-color:#3f4448;
        padding:5px;
        border:none;
        width:14rem;
        border-radius:5px;
        font-size:inherit;
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
        display:flex;
        align-items:center;
        svg{
            margin-left:1rem;
        }
        .plus{
            font-size:1.2em;
        }
        .arrow{
            margin:0;
            font-size:0.7em;
        }
        .user{
            position:relative
        }
        .account-details{
            position:absolute;
            z-index:1;
            background-color:white;
            color:black;
            border-radius:5px;
            line-height:2.2;
            font-size:12px;
            right:0;
            width:140px;
            a div:hover{
                background-color:blue;
                color:white;
                border-radius:5px;
            }
        }
        a{
            margin:0;
        }
        &:hover{
            cursor:pointer;
        }
`;
