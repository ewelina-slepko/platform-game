/* eslint-disable array-callback-return */
import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'
import createEngine from './Engine';

//canvas size
const canvasHeight = window.innerHeight;
const canvasWidth = window.innerWidth;

const player = { positionX: 0, positionY: window.innerHeight - 60, width: 50, height: 50 }

//obstacles
const obstacles = [
    { positionX: 200, positionY: canvasHeight - 300, width: 100, height: 300, color: 'rgb(24, 24, 24)' },
    { positionX: 600, positionY: canvasHeight - 400, width: 100, height: 200, color: 'rgb(235, 52, 225)' },
    { positionX: 0, positionY: canvasHeight - 10, width: canvasWidth, height: 10, color: 'rgb(235, 52, 225)' }
]

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = (right) => board.movingRight = right
    const movePlayerLeft = (left) => board.movingLeft = left;
    const movePlayerUp = (up) => board.movingUp = up;
    const movePlayerDown = (down) => board.movingDown = down;

    const updateMovement = () => {
        if ((board.movingLeft && detectCollision(player, obstacles[0]))
            || (board.movingLeft && detectCollision(player, obstacles[1]))) {
            player.positionX += 8
        } else if (board.movingLeft) {
            player.positionX -= 2
        }

        if ((board.movingRight && detectCollision(player, obstacles[0]))
            || (board.movingRight && detectCollision(player, obstacles[1]))) {
            player.positionX -= 8
        } else if (board.movingRight) {
            player.positionX += 2
        }

        if ((board.movingUp && detectCollision(player, obstacles[0]))
            || (board.movingUp && detectCollision(player, obstacles[1]))) {
            player.positionY += 8
        } else if (board.movingUp) {
            player.positionY -= 2
        }

        if ((board.movingDown && detectCollision(player, obstacles[0]))
            || (board.movingDown && detectCollision(player, obstacles[1]))) {
            player.positionY -= 8
        } else if (board.movingDown) {
            player.positionY += 2
        }

        if (detectCollision(player, obstacles[2])) {
            player.positionY = window.innerHeight - (60 + 1.5)
        }

        player.positionY += 1.5
    }

    function detectCollision(object1, object2) {
        const isLeftEdge = object1.positionX + object1.width >= object2.positionX;
        const isRightEdge = object1.positionX <= object2.positionX + object2.width;
        const isTopEdge = object1.positionY + object1.height >= object2.positionY;
        const isBottomEdge = object1.positionY <= object2.positionY + object2.height

        let isCollision = false

        if (isLeftEdge && isRightEdge && isTopEdge && isBottomEdge) {
            isCollision = true;
        } else {
            isCollision = false
        }
        return isCollision
        // if (isCollision && board.movingRight) {
        //     object1.positionX = object2.positionX - object1.width
        // }

        // if (isCollision && board.movingDown) {
        //     object1.positionY = object2.positionY - object1.height
        // }

        // if (isCollision && board.movingLeft) {
        //     object1.positionX = object2.positionX + object2.width
        // }
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

