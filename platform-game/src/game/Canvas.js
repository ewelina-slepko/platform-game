function createCanvas() {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');

    const drawCanvas = (obstacles, canvasHeight, canvasWidth) => {
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        const obstacle = obstacles.map((element) => {
            context.fillStyle = element.color
            context.fillRect(element.positionX, element.positionY, element.width, element.height)
        })
        return obstacle;
    }

    const drawPlayer = (playerPositionX, playerPositionY, playerWidth, playerHeight) => {
        context.fillStyle = 'rgb(100, 100, 100)';
        context.fillRect(playerPositionX, playerPositionY, playerWidth, playerHeight);
    }

    return {
        drawCanvas,
        drawPlayer,
    }
}

export default createCanvas;
