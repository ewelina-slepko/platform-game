function createEngine(updateMovement, draw) {
    let lastTimestamp = 0

    function update(timestamp) {
        if (timestamp - lastTimestamp >= 1000 / 30) {
            updateMovement()
            lastTimestamp = timestamp;
        }
        draw()
        requestAnimationFrame(update);
    };
    update();
}
export default createEngine;
