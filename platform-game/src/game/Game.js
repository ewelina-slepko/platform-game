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

//obstacles
const obstacles = [
    { positionX: 200, positionY: canvasHeight - 100, width: 100, height: 100, color: 'rgb(24, 24, 24)' }
]

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

        const detectedObstacle = obstacles.map((obstacle) => {
            if (playerPositionX >= obstacle.positionX - playerWidth &&
                playerPositionX <= obstacle.positionX + obstacle.width &&
                playerPositionY + playerHeight >= canvasHeight - obstacle.height) {
                isCollision = true
            }
            console.log(isCollision)
        })

    }

    const draw = () => {
        canvas.drawCanvas(obstacles, canvasHeight, canvasWidth);
        canvas.drawPlayer(playerPositionX, playerPositionY, playerWidth, playerHeight);
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown)
    createEngine(updateMovement, draw, detectCollision);

    return { draw }
}
export default createGame;

