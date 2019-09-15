import Canvas from './Canvas'

function Game() {
    const canvas = Canvas()
    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(20, 10);
    }
    return { draw }
}

export default Game;
