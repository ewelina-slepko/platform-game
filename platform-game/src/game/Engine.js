import createGame from './Game'

function createEngine() {

    const game = createGame();
    let start = 0;

    function update(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;

        if (progress < 2000) {

            window.requestAnimationFrame(update);
            game.draw();
        }

    };

    update();
}

export default createEngine;
