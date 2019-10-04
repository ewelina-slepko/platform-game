function createEngine(updateMovement, draw, detectCollision) {
    let lastTimestamp = 0

    function update(timestamp) {
        if (timestamp - lastTimestamp >= 1000 / 80) {
            updateMovement()
            detectCollision()
            lastTimestamp = timestamp;
        }
        draw()
        requestAnimationFrame(update);
    };
    update();
}
export default createEngine;
