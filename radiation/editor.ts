class edit {
    DOM: HTMLElement;
    Cursor: HTMLElement;
    Highlighter: HTMLElement;

    constructor(element: HTMLElement) {
        this.DOM = element;

        this.Cursor = document.createElement("div")
        this.Cursor.setAttribute("style", "width: 2px; height: 25px;")
        
        this.Highlighter = document.createElement("div")
        this.Highlighter.id = "rad-highlight"
        this.Highlighter.setAttribute("style", "width: 100%; height: 100%;")

        this.DOM.appendChild(this.Highlighter)
        this.DOM.appendChild(this.Cursor)
    }
}

export const editor = (element: HTMLElement) => {
    const edn: edit = new edit(element);
    return edn;
}

export default edit