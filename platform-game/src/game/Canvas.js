function createCanvas() {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');

    const drawCanvas = (canvasHeight, canvasWidth) => {
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        //obstacles
        context.fillStyle = 'rgb(24, 24, 24)';
        context.fillRect(200, canvasHeight - 100, 100, 100)
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
