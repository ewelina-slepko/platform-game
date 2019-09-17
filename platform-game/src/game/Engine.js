function createEngine(draw, controller) {

    function update() {
        draw()
        window.requestAnimationFrame(update);
    };
    update();
}
export default createEngine;
