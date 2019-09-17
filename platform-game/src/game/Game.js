import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(board.getPlayerPosition().playerPosX, board.getPlayerPosition().playerPosY);
    }
    createEngine(draw);

    const movePlayerRight = (right) => {
        if (right) {
            board.incrementPlayerPosX();
        }
    }

    const movePlayerLeft = (left) => {
        if (left) {
            board.decrementPlayerPosX()
            console.log(left)
        }
    }

    const movePlayerDown = () => {
        board.incrementPlayerPosY();
    }

    const movePlayerUp = (up) => {
        if (up) {
            board.decrementPlayerPosY();
        }
    }

    createController(movePlayerRight, movePlayerLeft, movePlayerDown, movePlayerUp)

    return { draw }
}

export default createGame;

