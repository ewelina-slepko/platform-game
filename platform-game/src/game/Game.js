import createCanvas from './Canvas'
import createController from './Controller'
import createBoard from './Board'

function createGame() {
    const canvas = createCanvas();
    const board = createBoard();

    const movePlayerRight = () => {
        board.incrementPlayerPosX();
        console.log(board.playerPosX)
        draw()
    }

    const movePlayerLeft = () => {
        board.decrementPlayerPosX()
        console.log('jbsdgs')
        draw()
    }

    const movePlayerDown = () => {
        board.incrementPlayerPosY();
        console.log(board.playerPosY)
        draw()
    }

    const movePlayerUp = () => {
        board.decrementPlayerPosY();
        console.log(board.playerPosY)
        draw()
    }

    createController(movePlayerRight, movePlayerLeft, movePlayerDown, movePlayerUp)

    const draw = () => {
        canvas.drawCanvas();
        canvas.drawPlayer(board.getPlayerPosition().playerPosX, board.getPlayerPosition().playerPosY);
    }
    return { draw }
}

export default createGame;
