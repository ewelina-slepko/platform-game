import React from 'react'

class Canvas extends React.Component {

    componentDidMount() {
        this.drawCanvas();
    }

    componentDidUpdate() {
        this.drawCanvas();
    }

    drawCanvas() {
        const context = this.myCanvas.getContext('2d');
        context.fillStyle = 'rgb(48, 48, 48)';
        context.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height);
        // context.clearRect(0, 0, 500, 500);
        context.fillText('If you can read this, your eyes are better than mine.', 250, 250);
    }

    render() {
        return (
            <div>
                <canvas ref={canvas => this.myCanvas = canvas} width={window.innerWidth} height={window.innerHeight} />
            </div>
        );
    }
}

export default Canvas;
