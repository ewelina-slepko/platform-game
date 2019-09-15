import React, { useEffect } from 'react';
import Game from './game/Game'

function App() {

    useEffect(() => {
        const game = Game();
        game.draw();
    })

    return (
        <canvas id="game" width="500" height="500"></canvas>
    )
}

export default App;
