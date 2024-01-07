import { LitElement, html, css } from 'lit-element';
import { cardStyles } from '../css/card-styles';
import { generalStyles } from '../css/general-styles';

export class CardComponent extends LitElement{

    static get styles(){
    //IMPORTAMOS MODULOS CSS
    return[
        cardStyles,
        generalStyles
    ]
}

// DEFINIR PROPIEDADES
    static get properties(){
    return{
        title: {type: String},
        text:{type: String}
    }  
}

// PARA INICIALIZAR PROPIEDADES
constructor(){
    super();
    this.title = 'David Hernandez'
    this.text = 'Culpa in sunt pariatur aliquip labore magna fugiat amet est duis incididunt ullamco fugiat laborum.';
  }

// render para llamar al template
    render(){
        return html `
            <div class="grid-column-4">
                <card-album class="card-album">
                <img src="img/supa.jpg"/>
                    <p class="title">${this.title}</p>
                </card-album>

                <card-album class="card-album">
                    <img src="img/supa.jpg"/>
                    <p class="title">${this.title}</p>
                </card-album>

                <card-album class="card-album">
                <img src="img/supa.jpg"/>    
                <p class="title">${this.title}</p>
                </card-album>

                <card-album class="card-album">
                <img src="img/supa.jpg"/>
                <p class="title">${this.title}</p>
                </card-album>
            </div>
            <br>
            <div class="grid-column-1">
                <card class="card">
                       <p>${this.text}</p>
                </card>
             
            </div>
        `;
    }
}

// PARA QUE EL NAVEGAGOR PUEDA INTERPRETARLO
customElements.define('card-lit',CardComponent);