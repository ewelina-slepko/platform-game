import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

//canvas size
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;

//player size
const playerHeight = 50;
const playerWidth = 50;

//player position
let playerPositionX = 0;
let playerPositionY = window.innerHeight - playerHeight;

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
        if (board.movingLeft) {
            playerPositionX -= 2
        }
        if (board.movingRight) {
            playerPositionX += 2
        }
        if (board.movingUp) {
            playerPositionY -= 2
        }
        if (board.movingDown) {
            playerPositionY += 2
        }
    }

    const detectCollision = () => {
        let isCollision = false
        if (playerPositionX >= 200 - playerWidth && playerPositionX <= 200 + 100) {
            isCollision = true

        }
        console.log(isCollision)

    }

    const draw = () => {
        canvas.drawCanvas(canvasHeight, canvasWidth);
        canvas.drawPlayer(playerPositionX, playerPositionY, playerWidth, playerHeight);
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown)
    createEngine(updateMovement, draw, detectCollision);

    return { draw }
}
export default createGame;

