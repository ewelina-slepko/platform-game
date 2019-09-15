import React, { useEffect, useRef } from 'react';

function Canvas() {

    let myCanvas = useRef();

    useEffect(() => {
        drawCanvas();
    });

    const drawCanvas = () => {
        const context = myCanvas.current.getContext('2d');
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, myCanvas.current.width, myCanvas.current.height);
        context.fillStyle = 'rgb(100, 100, 100)';
        context.fillRect(0, 0, 50, 50);
        context.strokeRect(0, 0, 50, 50);
    };

    return (
        <canvas ref={myCanvas} width={window.innerWidth} height={window.innerHeight} />
    )
}

export default Canvas;
