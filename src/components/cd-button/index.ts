import { LitElement, html, property } from 'lit-element';
import { buttonStyles } from './style.default';

export type CdButtonProps = {
  label: string;
  eventListener?: string;
}

class CdButton extends LitElement {
  @property({ type: String }) label: CdButtonProps["label"] = 'Default text';
  @property({ type: String }) eventListener: CdButtonProps["eventListener"] = '';

  value: number = 0;
  
  myFunction = () => {
    if (this.eventListener?.length) {
      this.value++;
      const str = `Button clicked ${this.value} times`;
      this.dispatchEvent(new CustomEvent(this.eventListener, {
        bubbles: true,
        composed: true,
        detail: str
      }));
    }
  };
  
  static get styles() {
    return buttonStyles;
  }
  
  render() {
    return html`<button @click="${this.myFunction}">${this.label}</button>`;
  }
}

export default () => {
  customElements.define('cd-button', CdButton);
}
