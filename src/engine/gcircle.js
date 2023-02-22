
class GCircle extends GRenderableObject {
    fillColor = 0;
    radius = 10;

    constructor(tag, x, y, fillColor, radius) {
        super(`circle_${tag}`, x, y);
        this.fillColor = fillColor;
        this.radius = radius;
    }

    render() {
        fill(this.fillColor);
        circle(this.x, this.x, this.radius)
    }
}