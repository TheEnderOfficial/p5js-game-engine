
class GRenderableObject extends GObject {
    x = 0;
    y = 0;

    constructor(tag, x, y) {
        super(`renderable_${tag}`)

        this.x = x;
        this.y = y;
    }

    render() {

    }

    setup() {

    }

    tick() {
        this.render();
    }
}