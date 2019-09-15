import createCanvas from './Canvas'

function createGame() {
    const canvas = createCanvas()
    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(20, 10);
    }
    return { draw }
}

export default createGame;
