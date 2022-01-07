import { LitElement, html, property } from 'lit-element';

export type CdNavObject = {
  id: string,
  title: string,
  url: string,
  icon?: string,
  selected: boolean
}

export type CdListNavProps = {
  navArray: string;
}

const parseArray = (stringifiedArray: string, propertyName: string): unknown[] => {
  try {
    const array = JSON.parse(stringifiedArray.replace(/&quot;/g,'"'));
    return Array.isArray(array) ? array : [];
  } catch (error) {
    console.error(`Component Depot Error: Check array property at "${propertyName}"`);
    return [];
  }
};

class CdListNav extends LitElement {
  @property({ type: String }) navArray: CdListNavProps["navArray"] = '[]';

  render() {
    const parsedArray = parseArray(this.navArray, 'navArray') as CdNavObject[];

    return parsedArray.length ? html`
      <nav>
        <ul>
          ${
            parsedArray.map((menuItem) => html`
              <li class="${menuItem.selected ? 'selected' : ''}">
                <a href="${menuItem.url}">
                  ${menuItem.icon && html`<i class="${menuItem.icon}"></i>`}
                  <span>${menuItem.title}</span>
                </a>
              </li>
            `)
          }
        </ul>
      </nav>
    ` : html`
      Navigation missing
    `;
  }
}

export default () => {
  customElements.define('cd-list-nav', CdListNav);
}
