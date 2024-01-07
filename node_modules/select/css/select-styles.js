import {css } from "lit-element";

export const selectStyles = css`
:host{
    --primary-color: #9EBE1D;
    --default-color: #F3EFEE;
    --secondary-color: #72D0FB;
    --warning-color: #F71906;
    --error-msg: #CD5C5C;
}

.colorSelect{
    background-color:var(--primary-color);
}

.space{
    margin-top: 5px;
}

select{
    width: 250px;
    padding: 8px 10px;
    border:none;
    height: 50px;
    border-bottom: 3px solid #000;
    font-size: 16px;
}

select:focus{
    border:none;
    outline:none;
    border-bottom: 3px solid gray;
}

.error-msg{
    font-size: 12px;
    color: var(--error-msg);
}

.required:after{
content:"*";
font-size:14px;
color: var(--error-msg);
}

select:disabled, 
select[disabled]{
    background-color:#CCCCCC;
    color:#F6F6F6;
    pointer-events: none;
    border-bottom: 3px solid #F6F6F6;
}
`;