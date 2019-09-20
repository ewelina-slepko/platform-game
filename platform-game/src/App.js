import React, { useEffect } from 'react';
import createGame from './game/Game'

function App() {

    useEffect(() => {
        const game = createGame();
        game.draw();
    })

    return (
        <canvas id="game" class="canvas" height={window.innerHeight} width={window.innerWidth}></canvas>
    )
}

export default App;
