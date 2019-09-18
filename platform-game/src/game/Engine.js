function createEngine(draw, func) {
    let lastTimestamp = 0

    function update(timestamp) {

        if (timestamp - lastTimestamp >= 1000 / 30) {
            func()
            lastTimestamp = timestamp;
        }

        draw()
        window.requestAnimationFrame(update);
    };
    update();
}
export default createEngine;
