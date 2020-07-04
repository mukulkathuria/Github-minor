import styled from 'styled-components';

export const SideBar = styled.div`
        width:18%;
        height:100%;
        position:fixed;
        top:auto;
        left:0;
        padding:30px;
        overflow-x: hidden;
        border-right:0.2px solid #e8e9eb;
        background-color:white;
        hr{
            border:0.2px solid #e8e9eb;
            margin:1rem 0;
         }
`;
export const User = styled.div`
    font-size:14px;
    margin:1rem auto;
    svg{
        margin-right:10px;
    }
`;
export const SideLinks = styled.div`
        font-size:12px;
        svg{
            margin-right:10px;
            color:#cfc438;
        }
        ul{
            list-style:none;
        }
        li{
            margin:8px 0;
        }
        .flex{
            display:flex;
            justify-content:space-between;
            button{
                background-color:#34c953;
                padding:3px;
                color:#c7fae3;
                font-size:9px;
                border:none;
                border-radius:3px;
            }
        }
        input{
            margin-bottom:1rem;
            margin-top:8px;
            padding:5px;
            font-size:10px;
            border:0.2px solid #e8e9eb;
            border-radius:5px;
            width:100%;
        }
        .showmore{
            font-size:10px;
            color:#94989e;
        }
`;
export const Teams = styled.div`
            font-size:11px;
            line-height: 1.7;
            span{
                font-weight:600;
            }
`;