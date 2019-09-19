import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

let playerPosX = 10;
let playerPosY = 400;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
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

    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(playerPosX, playerPosY);
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown)
    createEngine(updateMovement, draw);

    return { draw }
}

export default createGame;

