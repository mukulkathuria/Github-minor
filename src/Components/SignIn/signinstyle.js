import styled from 'styled-components';

export const Inputs = styled.input`
    padding : 8px;
    width :100%;
    border : 0.2px solid #f1f1f1;
    margin:10px auto;
    border-radius:10px;
    &:focus{
            border:2px solid blue;
    }
`;
export const Labels = styled.label`
    width:100%;
`;

export const InputGroup = styled.div`
        margin:1rem auto;
`;
export const SuccessBtn = styled.button`
        width:100%;
        padding:10px;
        background-color: green;
        color:white;
        border:none;
        border-radius:12px;
        cursor:pointer;
        &:hover{
                background-color:lightgreen;
        }
`;
export const Errormsg = styled.span`
        font-size:10px;
        color:red;
`;