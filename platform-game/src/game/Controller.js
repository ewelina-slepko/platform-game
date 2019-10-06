function createController(movePlayerLeft, movePlayerRight, movePlayerUp, movePlayerDown) {

    let left = false;
    let right = false;
    let up = false;
    let down = false;

    document.onkeydown = function (e) {
        const key_state = e.type === "keydown"
        switch (e.keyCode) {
            case 37:
                left = key_state
                movePlayerLeft(left)
                break;
            case 39:
                right = key_state
                movePlayerRight(right)
                break;
            case 38:
                up = key_state
                movePlayerUp(up)
                break;
            case 40:
                down = key_state
                movePlayerDown(down)
                break;
            default:
        }
    };
    document.onkeyup = function (e) {
        const key_state = e.type !== "keyup"
        switch (e.keyCode) {
            case 37:
                left = key_state
                movePlayerLeft(left)
                break;
            case 39:
                right = key_state
                movePlayerRight(right)
                break;
            case 38:
                up = key_state
                movePlayerUp(up)
                break;
            case 40:
                down = key_state
                movePlayerDown(down)
                break;
            default:
        }
    };
}

export default createController;


