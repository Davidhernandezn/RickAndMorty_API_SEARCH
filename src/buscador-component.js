import { LitElement, html, css } from 'lit-element';
import { buscadorStyles } from '../css/buscador-styles';
import { generalStyles } from '../css/general-styles';
import { gender_list, status_list } from '../catalogs/catalogs';//IMPORTAMOS CATALOGOS
//IMPORTAMOS COMPONENTES A USAR
import { cardStyles } from 'card/css/card-styles';
import { butonStyles } from 'button/css/button-styles';
import { inputStyles } from 'input/css/input-styles';
import { selectStyles } from 'select/css/select-styles'


export class BuscadorComponent extends LitElement {
    static get styles() {
        //IMPORTAMOS MODULOS CSS
        return [
            buscadorStyles,
            //IMPORTAR STYLES DE COMPONENTE
            cardStyles,
            butonStyles,
            generalStyles,
            inputStyles,
            selectStyles
        ]
    }

    // DEFINIR PROPIEDADES
    static get properties() {
        return {
            //IMPOTRAMOS EN LAS PROPIEDADES LOS CATALOGOS
            status_list: { type: Array },
            gender_list: { type: Array },
            //DE COMPONENTE INPUT
            inputType: { type: String },
            placeHolderName: { type: String },
            placeHolderSpecie: { type: String },
            placeHolderType: { type: String },
        }
    }

    // PARA INICIALIZAR PROPIEDADES
    constructor() {
        super();
        //ESTAS PROPIEDADES TOMAN SU VALOR DEL ARRAY IMPORTADO
        this.status_list = status_list;
        this.gender_list = gender_list;
        this.inputType = "Text";
        this.placeHolderName = "Nombre del personaje";
        this.placeHolderSpecie = "ingresa una especie";
        this.placeHolderType = "ingresa un tipo";
        console.log(status_list);
        console.log(gender_list);
    }

    // render para llamar al template
    render() {
        return html`
        <h1>Buscador</h1>

        <!--COMPONENTE CARD-->
        <card class="card grid-column-12">
            <div class="grid-rows-2">
                <div class="grid-column-4">

        <!--COMPONENTE INPUT-->            
                <div-input>
                <input class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderName}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>

        <!--COMPONENTE SELECT-->
            <div-select>
            <div class="space"></div>
            <select class="colorSelect">
            ${this.status_list.map(status => html`
          <option value="${status.value}">${status.text}</option>
        `)}
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>

        <!--COMPONENTE INPUT-->            
        <div-input>
                <input class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderSpecie}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
        
        <!--COMPONENTE INPUT-->            
                <div-input>
                <input class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderType}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
                </div-input>
                
            
            </div>              
                <div class="grid-column-4"></div>       
            </div>
        </card>
        
        `
    }


}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('buscador-lit', BuscadorComponent);