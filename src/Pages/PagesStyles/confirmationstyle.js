import styled from 'styled-components';

export const DivCenter = styled.div`
        text-align:center;
        margin:10rem auto;
        h1{
            font-weight:400;
            font-size:4rem;
        }
        button{
            margin:1rem auto;
            padding:20px;
            border:none;
            border-radius:8px;
            cursor:pointer;
            ouline:none;
            &:hover{
                background-color:blue;
                color:white;
            }
        }
`;