class ExampleGame {
    setup() {
        const baseScene = new GScene("base", 640, 480, color(255, 255, 255));
    
        const excircle = new GCircle("exampleCircle", 10, 10, color(0, 0, 0), 20);
    
        window.baseScene = baseScene;
        window.excircle = excircle;
    
        baseScene.addObject(excircle);
        baseScene.setup();
    }
    
    draw() {
        baseScene.tick();
    }
}