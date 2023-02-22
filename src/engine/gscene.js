
class GScene extends GObject {
    renderableObjects = [];
    width = 0;
    height = 0;
    bg = null

    constructor(name, width, height, bg) {
        super(`scene_${name}`)
        this.width = width;
        this.height = height;
        this.bg = bg;
    }

    setup() {
        resizeCanvas(this.width, this.height)
        this.renderableObjects.map(i => i.setup())
    }

    tick() {
        background(this.bg);
        this.renderableObjects.map(i => i.tick())
    }

    addObject(o) {
        this.renderableObjects.push(o)
    }
}