import { LitElement, html, css } from 'lit-element';
import { buscadorStyles } from '../css/buscador-styles';
import { generalStyles } from '../css/general-styles';
export class BuscadorComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        buscadorStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
  }

// render para llamar al template
    render(){
        return html `
        <h1>Buscador</h1>
        
        `
    }


}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('buscador-lit',BuscadorComponent);