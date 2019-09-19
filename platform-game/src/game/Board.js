function createBoard() {
    let playerPosX = 10;
    let playerPosY = 10;

    const incrementPlayerPosX = () => playerPosX += 2
    const decrementPlayerPosX = () => playerPosX -= 2
    const incrementPlayerPosY = () => playerPosY += 2
    const decrementPlayerPosY = () => playerPosY -= 2


    const getPlayerPosition = () => {
        return { playerPosX, playerPosY }
    }


    return { getPlayerPosition, incrementPlayerPosX, decrementPlayerPosX, incrementPlayerPosY, decrementPlayerPosY, stopPlayerPositionX, stopPlayerPositionY }
}

export default createBoard;
