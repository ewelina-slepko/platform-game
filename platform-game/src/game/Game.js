/* eslint-disable array-callback-return */
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
    { positionX: 200, positionY: canvasHeight - 300, width: 100, height: 100, color: 'rgb(24, 24, 24)' },
    { positionX: 600, positionY: canvasHeight - 400, width: 100, height: 200, color: 'rgb(235, 52, 225)' }
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

    function detectCollision() {
        let isCollision = false
        obstacles.map((obstacle) => {
            if (playerPositionX + playerWidth >= obstacle.positionX &&
                playerPositionX <= obstacle.positionX + obstacle.width &&
                playerPositionY + playerHeight >= obstacle.positionY &&
                playerPositionY <= obstacle.positionY + obstacle.height) {

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

