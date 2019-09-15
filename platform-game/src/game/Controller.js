function createController(moveRight, moveLeft, moveDown, moveUp) {

    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                moveLeft()
                break;
            case 39:
                moveRight()
                break;
            case 40:
                moveDown();
                break;
            case 38:
                moveUp();
                break;
            default:
        }
    };
}

export default createController;


