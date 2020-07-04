import styled from 'styled-components';

export const DivContainer = styled.div`
       margin:auto 18%;
       background-color:#f7f8fa;
`;

export const StyleDiv = styled.div`
        display:flex;
        font-size:14px;
`;
export const ProfileImg = styled.div`
        width:2rem;
        height:2rem;
        margin-right:10px;
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
        font-size:11px;
        margin-bottom:14px;
        .timestamp{
                margin-left:10px;
                font-size:10px;
                color:#94989e;
        }
`;
export const MinorBody = styled.div`
                display:flex;
                padding:10px;
                font-size:12px;
                background-color:white;
                justify-content:space-between;
                border:0.2px solid #e8e9eb;
                button{
                        height:20px;
                        width:50px;
                        cursor:pointer;
                        font-size: 11px;
                        border:0.2px solid #e8e9eb;
                        padding: 3px;
                }
`;
export const StyleBody = styled.div`
        display:flex;
        flex-direction:column;
        margin-left:10px;
        .small{
                font-size:10px;
                margin:0.8rem 0;
                word-spacing:5px;
        }
`;
export const Bodypart1 = styled.div`
                display:flex;
`;
export const BorderLine = styled.div`
        padding:15px;
        hr{
           margin-top:1rem;
           border:0.2px solid #e8e9eb;
        }
`;