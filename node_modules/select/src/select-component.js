import { LitElement, html, css } from 'lit-element';
import { selectStyles } from '../css/select-styles';
import { generalStyles } from '../css/general-styles';
export class SelectComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        selectStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
        blanText: {type: String},
        disabled: {type: Boolean},
        items: {type: Array},
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.blanText="Campo obligatorio";
    this.disabled = true;
    this.items=[{
        id:1,
        text: 'Austalia',
        value: 'AUST'
    },
    {
        id:2,
        text: 'Canada',
        value: 'CA'
    },
    {
        id:3,
        text: 'Estados Unidos',
        value: 'EUA'
    }];
  }

// render para llamar al template
    render(){
        return html `
        <div-select>
            <label class="required">Select General</label>
            <div class="space"></div>
            <select class="colorSelect"
            @input="${this.readSelect}"
            @change="${this.requiredSelect}"
            ?disabled="${this.disabled}">
                <option value="none">Selecciona pais</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="usa">USA</option>
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>
        <br>
        <br>
        <div-select>
            <label class="required">Select General</label>
            <div class="space"></div>
            <select class="colorSelect"
            @input="${this.readSelect}"
            @change="${this.requiredSelect}">
                <option value="none">Selecciona pais</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="usa">USA</option>
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>

        <br>
        <br>
        <div-select>
            <label class="required">Select General</label>
            <div class="space"></div>
            <select class="colorSelect"
            @input="${this.readSelect}"
            @change="${this.requiredSelect}">
            ${this.items.map(i => html`
          <option value="${i.value}">${i.text}</option>
        `)}
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>
        `}


    readSelect(e){
        if(e.target.value){
            console.log('Evento change', e.target.value);
        }
    }

    requiredSelect(e){
        let valueSelect = e.target.value;

        if(valueSelect === 'none'){
            this.shadowRoot.getElementById("error").innerHTML = this.blanText;
        }else{
            this.shadowRoot.getElementById("error").innerHTML ='';
     } 
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('select-lit',SelectComponent);