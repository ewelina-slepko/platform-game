import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

let playerPosX = 10;
let playerPosY = window.innerHeight - 70;
let velocityX = 0;
let velocityY = 0;
let jumping = true;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
        if (board.movingLeft) {
            velocityX -= 0.5
        }
        if (board.movingRight) {
            velocityX += 0.5
        }
        if (board.movingUp && jumping === false) {
            velocityY -= 30
            jumping = true;
        }
        if (board.movingDown) {
            velocityY += 0.5
        }

        if (playerPosY >= window.innerHeight - 84) {
            playerPosY = window.innerHeight - 84
            jumping = false;
        }

        if (playerPosY === window.innerHeight - 250 && (playerPosX >= 200 - 50 && playerPosX <= 200 + 300)) {
            playerPosY = window.innerHeight - 258
            jumping = false;
        }
        playerPosX += velocityX;
        playerPosY += velocityY
        velocityX *= 0.9
        velocityY *= 0.9
        velocityY += 1.5;
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

