import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

let playerPosX = 10;
let playerPosY = window.innerHeight - 70;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
        if (board.movingLeft) {
            playerPosX -= 2
        }
        if (board.movingRight) {
            playerPosX += 2
        }
        if (board.movingUp) {
            playerPosY -= 20
        }
        if (board.movingDown) {
            playerPosY += 2
        }

        if (playerPosY >= window.innerHeight - 70) {
            playerPosY = window.innerHeight - 78
        }

        if (playerPosY === window.innerHeight - 250 && (playerPosX >= 200 - 50 && playerPosX <= 200 + 300)) {
            playerPosY = window.innerHeight - 258
        }
        // playerPosY += 8;
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

