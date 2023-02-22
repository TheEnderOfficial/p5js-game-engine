
class GDevTools extends GHTMLRenderable {
    constructor() {
        super("devtools");
        this.state = {
            objects: window.gobjects
        };
    }

    renderGObjects() {
        return window.gobjects.map(i => `<li>${i.tag}</li>`).join("")
    }

    setup() {
        super.setup();
        document.addEventListener("newGObject", data => {
            this.setState({
                objects: window.gobjects
            })
        })
    }

    render() {
        this.element.innerHTML = `
            <h1 id="${this.getId('name')}">GDevTools</h1>      
            <p>GObjects: </p>
            <ul>
                ${this.renderGObjects()}
            </ul>
        `
        this.element.style = `border: 5px solid black;
margin: 10px;  
padding: 10px
`;
        this.element.querySelector(`#${this.getId('name')}`).style = `
text-align: center;
`
    }
}