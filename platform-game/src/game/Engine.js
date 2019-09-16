function createEngine(callback) {

    function update() {

        requestAnimationFrame(update);
        callback()
        console.log('coś')

    };
    update();
}

export default createEngine;
