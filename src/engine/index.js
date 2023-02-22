
function setup() {
    const counter = new GHTMLCounter();
    counter.setup();

    const devtools = new GDevTools();
    devtools.setup();

    window.exGame = new ExampleGame();

    exGame.setup();
}

function draw() {
    exGame.draw();
}