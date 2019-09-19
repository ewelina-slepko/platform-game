import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

let playerPosX = 10;
let playerPosY = 400;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(playerPosX, playerPosY);
    }

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
        console.log(board.movingLeft, board.movingRight, board.movingUp, board.movingDown)
        if (board.movingLeft) {
            playerPosX -= 5
        }
        if (board.movingRight) {
            playerPosX += 5
        }
        if (board.movingUp) {
            playerPosY -= 5
        }
        if (board.movingDown) {
            playerPosY += 5
        }
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown)
    createEngine(draw, updateMovement);

    return { draw }
}

export default createGame;

