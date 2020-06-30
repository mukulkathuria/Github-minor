import styled from 'styled-components';

export const SideBar = styled.div`
        width:18%;
        height:100%;
        position:fixed;
        top:auto;
        left:0;
        padding:30px;
        overflow-x: hidden;
        border-right:0.2px solid;
`;
export const User = styled.div`
    font-size:14px;
    margin:1rem auto;
    svg{
        margin-right:10px;
    }
`;
export const SideLinks = styled.div`
        margin:2rem auto;
        svg{
            margin-right:10px;
            color:#cfc438;
        }
        ul{
            list-style:none;
        }
`;
export const Teams = styled.div`
            font-size:11px;
`;