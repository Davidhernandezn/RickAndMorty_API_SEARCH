import { LitElement, html, css } from 'lit-element';
import { butonStyles } from '../css/button-styles';
import { generalStyles } from '../css/general-styles';
export class ButtonComponent extends LitElement{
    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        butonStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
        disabled:{type: Boolean}
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.disabled = true;
  }

// render para llamar al template
    render(){
        return html `
        <button-primary class="button-primary" @click="${this.clickButtton}" ?disabled=${this.disabled}>Click</button-primary>
        `
    }

    clickButtton(){
        console.log('Diste click');
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('button-lit',ButtonComponent);