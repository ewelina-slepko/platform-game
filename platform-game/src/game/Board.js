function createBoard() {
    let playerPosX = 10;
    let playerPosY = 10;

    const incrementPlayerPosX = () => {
        playerPosX += 1
    }

    const decrementPlayerPosX = () => {
        playerPosX -= 1
    }

    const incrementPlayerPosY = () => {
        playerPosY += 1
    }

    const decrementPlayerPosY = () => {
        playerPosY -= 1
    }

    const getPlayerPosition = () => {
        return { playerPosX, playerPosY }
    }

    return { getPlayerPosition, incrementPlayerPosX, decrementPlayerPosX, incrementPlayerPosY, decrementPlayerPosY }
}

export default createBoard;
