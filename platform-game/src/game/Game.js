import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = () => {
        board.incrementPlayerPosX();
        draw()
    }

    const movePlayerLeft = () => {
        board.decrementPlayerPosX()
        draw()
    }

    const movePlayerDown = () => {
        board.incrementPlayerPosY();
        draw()
    }

    const movePlayerUp = () => {
        board.decrementPlayerPosY();
        draw()
    }

    createController(movePlayerRight, movePlayerLeft, movePlayerDown, movePlayerUp)
    createEngine();

    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(board.getPlayerPosition().playerPosX, board.getPlayerPosition().playerPosY);
    }

    return { draw }
}

export default createGame;
