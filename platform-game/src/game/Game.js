import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

function createGame() {
    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(board.getPlayerPosition().playerPosX, board.getPlayerPosition().playerPosY);
    }

    const func = () => {
        console.log('func')
        board.incrementPlayerPosX();
    }

    const canvas = createCanvas();
    const board = createBoard();
    createEngine(draw, func);

    const movePlayerRight = (right) => board.incrementPlayerPosX()
    const movePlayerLeft = (left) => board.decrementPlayerPosX()
    const movePlayerDown = () => board.incrementPlayerPosY();
    const movePlayerUp = (up) => board.decrementPlayerPosY();



    createController(movePlayerRight, movePlayerLeft, movePlayerDown, movePlayerUp)

    return { draw }
}

export default createGame;

