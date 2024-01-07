import { LitElement, html, css } from 'lit-element';
import { buscadorStyles } from '../css/buscador-styles';
import { generalStyles } from '../css/general-styles';
import { gender_list, status_list } from '../catalogs/catalogs';//IMPORTAMOS CATALOGOS

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
        //IMPOTRAMOS EN LAS PROPIEDADES LOS CATALOGOS
        status_list: {type: Array},
        gender_list: {type: Array}
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    //ESTAS PROPIEDADES TOMAN SU VALOR DEL ARRAY IMPORTADO
    this.status_list = status_list;
    this.gender_list = gender_list;

    console.log(status_list);
    console.log(gender_list);
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