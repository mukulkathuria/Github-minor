import styled from 'styled-components';


export const SideBar = styled.div`
        width:18%;
        float:right;
        padding:20px;
`;

export const Heading = styled.div`
       font-size:14px;
       font-weight:500;
`;

export const RepoDiv = styled.div`
        display:flex;
        flex-direction:column;
        margin:1rem 0;
        font-size:10px;
        line-height:1.6;
        .mark{
                width:10px;
                height:10px;
                border-radius:50%;
                background-color:yellow;
        }
        .title{
                font-weight:500;
        }
`;
export const Lang = styled.div`
        display:flex;
        align-items:center;
        margin:8px 0;
        .small{
                font-size:10px;
                margin-left:5px;
        }
`;