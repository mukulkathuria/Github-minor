import styled from 'styled-components';

export const DivContainer = styled.div`
       margin:auto 18%;
       background-color:#f1f1f1;
`;

export const StyleDiv = styled.div`
        display:flex;
        padding:20px;
        font-size:14px;
        border-bottom:0.2px solid darkgrey;
`;
export const ProfileImg = styled.div`
        width:2rem;
        height:2rem;
        img{
                width:100%;
                height:100%;
        }
`;
export const MojorBody = styled.div`
        display:flex;
        flex-direction:column;
        width:100%;
`;
export const MajorBodyStatus = styled.div`
`;
export const MinorBody = styled.div`
                display:flex;
                padding:10px;
                background-color:white;
                justify-content:space-between;
                border:0.2px solid darkgrey;
                button{
                        height:20px;
                        width:50px;
                        border:none;
                        cursor:pointer;
                }
`;
export const StyleBody = styled.div`
        display:flex;
        flex-direction:column;
        margin-left:10px;
`;
export const Bodypart1 = styled.div`
                display:flex;
                padding:10px;
`;