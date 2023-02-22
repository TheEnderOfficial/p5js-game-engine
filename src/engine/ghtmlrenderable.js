
class GHTMLRenderable extends GObject {
    element = null;
    state = {};
    refs = {};

    constructor(tag) {
        super(`html_${tag}`);
        this.element = document.createElement(`div`)
        this.element.id = `ghtmlobject_${tag}`;
    }
    
    setState(newState) {
        this.state = newState;
        this.update();
    }

    addRef(id) {
        if (!Object.keys(this.refs).includes(id)) {
            this.refs[id] = this.element.querySelector(`#${this.getRefId(id)}`);
            if (this.refs[id]) this.onRefAttached(this.refs[id], id)

        }
    }

    getRef(id) {
        return this.refs[id]
    }

    getId(id) {
        return `ghtmlel_${this.tag}_${id}`
    }

    getRefId(id) {
        return `ghtmlref_${this.tag}_${id}`
    }
    
    mount() {
        document.body.appendChild(this.element) 
        this.render();    
        this.updateRefs(); 
    }

    unmount() {
        document.body.removeChild(this.element)
    }
    
    update() {
        this.render();
        this.updateRefs(); 
    }

    updateRefs() {
        Object.keys(this.refs).forEach(ref => {
            this.refs[ref] = this.element.querySelector(`#${this.getRefId(ref)}`);
            if (this.refs[ref]) this.onRefAttached(this.refs[ref], ref)
        })
    }

    render() {
        
    }

    onRefAttached(node, refId) {

    }

    tick() {}
    setup() {
        this.mount();
    }
}