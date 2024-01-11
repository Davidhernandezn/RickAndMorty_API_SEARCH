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
            selectStyles, 
            css`
            .buttonForm{
                height: 25%;
                margin-top: 20px;
                width:50%;

            }

            .colorInput{
                background-color:var(--secondary-color);
            }

            .colorSelect{
                background-color:var(--secondary-color);
                            }

            img{
                width:50%;
            }

            .buscador-div{
                margin-left: 110px;
                display:inline-grid;
                grid-template-columns: auto auto auto;
                padding-top: 50px; 
            }
            .subtitle{
                text-align:left;
                margin-left:10px;
            }
            `
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
            placeHolderPage: { type: String },
            //PARA FILTRO
            params:{type: Object}
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
        this.placeHolderPage = "ingresa una pagina";
//LOS VALORES DEL INPUT LOS MANDARA EN ESTE OBJETO
        this.params = {
            name:'',
            status:'',
            species:'',
            type:'',
            gender: '',
            page: ''
        }

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
                <input
                id="name"
                class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderName}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>

        <!--COMPONENTE SELECT-->
            <div-select>
            <div class="space"></div>
            <select class="colorSelect" id="status">
            ${this.status_list.map(status => html`
          <option value="${status.value}">${status.text}</option>
        `)}
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>

        <!--COMPONENTE INPUT-->            
        <div-input>
                <input 
                id="species"
                class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderSpecie}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
            </div-input>
        
        <!--COMPONENTE INPUT-->            
                <div-input>
                <input
                id="type"
                class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderType}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
                </div-input>
                
            
            </div>              
                <div class="grid-column-4">
                      <!--COMPONENTE SELECT-->
            <div-select>
            <div class="space"></div>
            <select
            id="gender"
             class="colorSelect">
            ${this.gender_list.map(gender => html`
          <option value="${gender.value}">${gender.text}</option>
        `)}
            </select>
            <div class="space"></div>
            <span class="error-msg" id="error"></span>
        </div-select>

                <!--COMPONENTE INPUT-->            
                <div-input>
                <input 
                id="page"
                class="colorInput" 
                .type="${this.inputType}"
                .placeholder="${this.placeHolderPage}">
                <div class="space"></div>
                <span class="error-msg" id="error"></span>
                </div-input>

                <button-primary class="button-primary buttonForm">Limpiar</button-primary>
                <svg class="ic-search" @click="${this.searchParams}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                </div>       
            </div>
        </card>
        <br>
        <br>
        <div id="buscador"></div>
        
        `
    }

    //RECUPERA VALORES DE LOS COMPONENTES Y LOS AGREGA EN UN OBJETO
    searchParams(){
        //VALIDACION IF PARA DEJAR PASAR UN PARAMETRO CON INFORMACION Y NO FALLA AL ENVIAR LA PETICION
        if(this.params.name){
        this.params.name = this.shadowRoot.querySelector("#name").value;
        console.log(this.params.name);

        }

        if(this.params.status){
        this.params.status = this.shadowRoot.querySelector("#status").value;
        }

        if(this.params.species){
        this.params.species = this.shadowRoot.querySelector("#species").value;
        }

        if(this.params.type){
        this.params.type = this.shadowRoot.querySelector("#type").value;
        }

        if( this.params.gender){
        this.params.gender = this.shadowRoot.querySelector("#gender").value;
        }

        if(this.params.page){
            this.params.page = this.shadowRoot.querySelector("#page").value;
        }
        
        console.log(this.params);
        console.log(this.params.name);
        
        /**FETCH
         * PETCIONES HTTP ASINCRONAS CON CODIGO SENCILLO ATRAVEZ DE PROMESAS QUE SI SON ACEPTADAS CUANDO
         * RECIBA UNA RESPUESTA, SI FALLA ES POR FALLO DE RED O SI NO SE HA CONCRETADO LA PETICION CL70:7:00
         * 
         */

        //const url = `https://rickandmortyapi.com/api/character/`
        //MANDAMOS & para concatenar mas parametros PARA TRAER LA INFORMACION
        const url = `https://rickandmortyapi.com/api/character/?name=${this.params.name}&status=${this.params.status}&species=${this.params.species}
        &type=${this.params.type}&gender=${this.params.gender}&page=${this.params.gender.page}`
        console.log(url);
        fetch(url)
        .then(response => response.json()) // Cambiado "respuesta" a "response"
        .then(respuesta => {
            console.log(respuesta.results);

            //ACCEDER A LA INFO, 
            respuesta.results.forEach(element =>{
                console.log(element.name);

                this.shadowRoot.getElementById("buscador").innerHTML += `
                <div class="buscador-div">
                 <card-album class="card-album">
                <img src="${element.image}"/>    
                <p class="title">${element.name}</p>
                <p class="subtitle">Status: ${element.status}</p>
                <p class="subtitle">Species: ${element.species}</p>
                <p class="subtitle">Type: ${element.type}</p>
                <p class="subtitle">Gender: ${element.gender}</p>
                </card-album>
                </div>
               
                `
            })
        })
    
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('buscador-lit', BuscadorComponent);