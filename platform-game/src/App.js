import React, { useEffect } from 'react';
import createGame from './game/Game'

function App() {

    useEffect(() => {
        const game = createGame();
        game.draw();
    })

    return (
        <canvas id="game" width="500" height="500"></canvas>
    )
}

export default App;
