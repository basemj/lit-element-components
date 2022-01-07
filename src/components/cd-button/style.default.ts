import { css } from 'lit-element';

export const buttonStyles = css`
    :host(.primary) button {
        background-color: red;
        border: 0px solid transparent;
        border-radius: 10px;
        padding: 20px;
    }
    :host(.secondary) button {
        background-color: green;
        border: 0px solid transparent;
        border-radius: 10px;
        padding: 20px;
    }
`;