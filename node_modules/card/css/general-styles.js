import {css } from "lit-element";

export const generalStyles = css`
    .grid-column-4{
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 15px;
    }   

    .grid-column-1{
        display: grid;
        grid-template-columns: auto;
        column-gap: 15px;
    }
`;