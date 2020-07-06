import styled from 'styled-components';

export const DivContainer = styled.div`
        width:70%;
        margin:4rem 15%;
        display:flex;
        justify-content:space-between;
        align-items:center;
`;

export const Heading = styled.div`
        width:52%;
        color:white;
        p{
                font-size:1.2em;
                line-height:1.6;
        }
`;

export const Headdesc = styled.div`
    h2{
        font-size:4rem;
        font-weight:500;
        margin-bottom:1.5rem;
    }
`;

export const SignForm = styled.div`
        background-color:white;
        padding:25px;
        border-radius:5px;
        width:45%;
`;
export const Home = styled.div`
        background-color:rgba(0,0,0,0.6);
        position:fixed;
        overflow:scroll;
        height:100%;
        width:100%;
`;