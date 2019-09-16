function createBoard() {
    let playerPosX = 10;
    let playerPosY = 10;

    const incrementPlayerPosX = () => {
        playerPosX += 5
    }

    const decrementPlayerPosX = () => {
        playerPosX -= 5
    }

    const incrementPlayerPosY = () => {
        playerPosY += 5
    }

    const decrementPlayerPosY = () => {
        playerPosY -= 5
    }

    const getPlayerPosition = () => {
        return { playerPosX, playerPosY }
    }

    return { getPlayerPosition, incrementPlayerPosX, decrementPlayerPosX, incrementPlayerPosY, decrementPlayerPosY }
}

export default createBoard;
