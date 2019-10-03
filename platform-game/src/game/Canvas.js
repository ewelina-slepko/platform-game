function createCanvas() {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');

    const drawCanvas = () => {
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        context.fillStyle = 'rgb(24, 24, 24)';
        context.fillRect(200, window.innerHeight - 200, 200, 10)

    }

    const drawPlayer = (x, y) => {
        context.fillStyle = 'rgb(100, 100, 100)';
        context.fillRect(x, y, 50, 50);
        context.strokeRect(x, y, 50, 50);
    }

    return {
        drawCanvas,
        drawPlayer,
    }
}

export default createCanvas;
