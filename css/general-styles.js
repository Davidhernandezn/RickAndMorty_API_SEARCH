import {css } from "lit-element";

export const generalStyles = css`
    .grid-column-12{
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto auto;
        column-gap: 15px;
    }

    .grid-column-4{
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 15px;
    }

    .grid-rows-2{
        display: grid;
        grid-template-rows: auto auto;//SEPARA EN DOS FILAS
    }

`;