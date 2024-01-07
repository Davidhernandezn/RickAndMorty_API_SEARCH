import {css } from "lit-element";

export const butonStyles = css`
    .button-primary{
        background-color: #9EBE1D;
        border:none;
        color:white;
        padding:10px 10px;
        text-align: center;
        text-decoration: none;
        display:inline-block;
        font-size:14px;
        border-radius: 5px;
    }

    .button-primary:hover{
        box-shadow: 0 6px 8px 0 rgb(0,0,0,0,24);
        background-color:blue;
    }

    .button-primary:disabled,
    .button-primary[disabled]{
        background-color: #cccccc;
        color: #f6f6f6;
        pointer-events:none;
    }

`;