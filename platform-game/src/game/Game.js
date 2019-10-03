import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

let playerPosX = 0;
let playerPosY = 0;
let velocityX = 0;
let velocityY = 0;
let jumping = true;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;

    const updateMovement = () => {
        if (board.movingLeft) {
            velocityX -= 2
        }
        if (board.movingRight) {
            velocityX += 2
        }
        if (board.movingUp && jumping === false) {
            velocityY -= 40
            jumping = true;
        }

        if (playerPosY >= window.innerHeight - 80) {
            playerPosY = window.innerHeight - 80
            jumping = false;
        }

        playerPosX += velocityX;
        playerPosY += velocityY
        velocityX *= 0.9
        velocityY *= 0.9
        velocityY += 3;
        console.log(playerPosY)
    }


    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(playerPosX, playerPosY);
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp)
    createEngine(updateMovement, draw);

    return { draw }
}

export default createGame;

