window.gobjects = [];

class GObject {
    _tag = "";
    constructor(tag) {
        this._tag = tag;
        if (window.gobjects.map(i => i.tag).find(i => i === tag)) {
            throw new Error("GObject tag collision")
        }
        window.gobjects.push(this)
        document.dispatchEvent(new CustomEvent("newGObject", {
            detail: this
        }))
    }

    setup() {}
    tick() {}

    get tag() {
        return this._tag;
    }

    set tag(d) {
        throw new Error("Tag cannot be changed on runtime")
    }
}