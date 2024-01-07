import { LitElement, html, css } from 'lit-element';
import { inputStyles } from '../css/input-styles';
import { generalStyles } from '../css/general-styles';
export class InputComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        inputStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
        msgValue: {type: String},
        placeHolder: {type: String},
        blankText:{type: String},
        maxLengthText: {type: Number},
        minLengthText: {type: Number},
        inputType: {type: String},
        disabled: {type: Boolean},
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.msgValue = '';
    this.inputType = 'text';
    this.placeHolder = 'Test'
    this.blankText = 'Campo obligatorio';
    this.minLengthText = 2;
    this.maxLengthText = 5;
    this.disabled = true;
  }

// render para llamar al template
    render(){
        return html `
            <div-input>
                <label class="required">Input general</label>
                <div class="space"></div>
                <input class="colorInput" .value="${this.msgValue}"
                .type="${this.inputType}"
                .placeholder="${this.placeHolder}"
                @change="${this.readInput}"
                @keyup="${this.requiredInput}"
                >

                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
            <br>
            <br>
            <br>
            <div-input>
                <label class="required">Input general</label>
                <div class="space"></div>
                <input class="colorInput" .value="${this.msgValue}"
                .type="${this.inputType}"
                .placeholder="${this.placeHolder}"
                @change="${this.readInput}"
                @keyup="${this.requiredInput}"
                ?disabled ="${this.disabled}"
                >

                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
        `
    }
//RECUPERAR VALOR DE INPUT
    readInput(e){
        if(e.target.value){
            console.log(e.target.value);
        }
    }

    //NUMERO DE CARACTERES
    requiredInput(e){
        let valueInput = e.target.value;
        let lengthInput = e.target.value.length;
        if(valueInput === ''){
            this.shadowRoot.getElementById("error").innerHTML = this.blankText;
        }else if(lengthInput < this.minLengthText){
            this.shadowRoot.getElementById("error").innerHTML = "Minimo "+this.minLengthText + " Caracteres"
        }else if(lengthInput > this.maxLengthText){
            this.shadowRoot.getElementById("error").innerHTML = "Pasaste la longitud de caracteres";
        }else{
            this.shadowRoot.getElementById("error").innerHTML = "";
        }
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('input-lit',InputComponent);