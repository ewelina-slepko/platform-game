function createCanvas() {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');

    const drawCanvas = () => {
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, 500, 500);
    }

    const drawPlayer = (x, y) => {
        context.fillStyle = 'rgb(100, 100, 100)';
        context.fillRect(x, y, 50, 50);
        context.strokeRect(x, y, 50, 50);
    }

    // const clearCanvas = (x, y) => {
    //     context.clearRect(0, 0, 500, 500);
    //     context.clearRect(x, y, 50, 50);
    // }

    return {
        drawCanvas,
        drawPlayer,
    }
}

export default createCanvas;
