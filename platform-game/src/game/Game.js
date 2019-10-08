/* eslint-disable array-callback-return */
import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

//canvas size
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;

const player = { positionX: 0, positionY: window.innerHeight - 50, width: 50, height: 50 }

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
            player.positionX -= 2
        }
        if (board.movingRight) {
            player.positionX += 2
        }
        if (board.movingUp) {
            player.positionY -= 2
        }
        if (board.movingDown) {
            player.positionY += 2
        }
    }

    function detectCollision(object1, object2) {
        let isCollision = false

        if (object1.positionX + object1.width >= object2[0].positionX &&
            object1.positionX <= object2[0].positionX + object2[0].width &&
            object1.positionY + object1.height >= object2[0].positionY &&
            object1.positionY <= object2[0].positionY + object2[0].height) {

            isCollision = true
        }
        console.log(isCollision)
    }

    const draw = () => {
        canvas.drawCanvas(obstacles, canvasHeight, canvasWidth);
        canvas.drawPlayer(player.positionX, player.positionY, player.width, player.height);
    }

    createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown)
    createEngine(updateMovement, draw, detectCollision, player, obstacles);

    return { draw }
}
export default createGame;

