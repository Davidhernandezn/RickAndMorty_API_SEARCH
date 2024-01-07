// import {css } from "lit-element";

// export const inputStyles = css`
//     :host{
//     --primary-color: #9EBE1D;
//     --default-color: #F3EFEE;
//     --secondary-color: #72D0FB;
//     --warning-color: #F71906;
//     --error-msg: #CD5C5C;
// }

// .space{
//     margin-top: 5px;
// }

// label{
//     font-size:12px;
// }

//  .colorInput{
//     background-color:var(--primary-color);
// } 

// input{
//     width: 235px;
//     padding:5px;
//     height: 40px;
//     font-size: 16px;
//     border: 0;
//     border-bottom: 3px solid #000;
//    /*  background: transparent;
//    background-color: var(--primary-color);*/
// }

// .input:focus{
//     border: none;
//     outline:none;
//     border-bottom: 3px solid var(--primary-color);
// }

// .error-msg{
//     font-size: 12px;
//     color: var(--error-msg);
// }

// .required:after{
//     content:"*";
//     font-size: 14px;
//     color:var(--error-msg);
// }

// //DESHABILITAR INPUT
// input:disabled,
// input[disabled] {
//   background-color: #cccccc;
//   color: #f6f6f6;
//   pointer-events:none;
//   border-bottom: 3px solid #f6f6f6;
// }
// `;


import {css} from "lit-element";

export const inputStyles = css`
  :host {
    --primary-color: #9EBE1D;
    --default-color: #F3EFEE;
    --secondary-color: #72D0FB;
    --warning-color: #F71906;
    --error-msg: #CD5C5C;
  }

  .space {
    margin-top: 5px;
  }

  label {
    font-size: 12px;
  }

  .colorInput {
    background-color: var(--primary-color);
  }

  input {
    width: 235px;
    padding: 5px;
    height: 40px;
    font-size: 16px;
    border: 0;
    border-bottom: 3px solid #000;
    /*  background: transparent;
    background-color: var(--primary-color);*/
  }

  .input:focus {
    border: none;
    outline: none;
    border-bottom: 3px solid var(--primary-color);
  }

  .error-msg {
    font-size: 12px;
    color: var(--error-msg);
  }

  .required:after {
    content: "*";
    font-size: 14px;
    color: var(--error-msg);
  }

  /* DESHABILITAR INPUT */
  input:disabled,
  input[disabled] {
    background-color: #cccccc;
    color: #f6f6f6;
    /* pointer-events: none; */
    /* Remove pointer-events to enable interaction */
    border-bottom: 3px solid #f6f6f6;
  }
`;
