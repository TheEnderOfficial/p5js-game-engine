
class GHTMLCounter extends GHTMLRenderable {
    constructor() {
        super("counter")
        this.state = {
            counter: 0
        }
        this.addRef("1");
    }

    render() {
        this.element.innerHTML = `<h1>Counter: ${this.state.counter}</h1>
<button id="${this.getRefId("1")}">Hello, button!</button>`;
    }

    onRefAttached(node, refId) {
        if (refId === "1") {
            node.onclick = () => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }
        }
    }
}