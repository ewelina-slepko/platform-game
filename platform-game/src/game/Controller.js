function createController(movePlayerRight, movePlayerLeft, movePlayerDown, movePlayerUp) {

    let left = false;
    let right = false;
    let up = false;


    document.onkeydown = function (e) {
        const key_state = e.type === "keydown" ? true : false
        switch (e.keyCode) {
            case 37:
                left = key_state
                movePlayerLeft(left)
                break;
            case 39:
                right = key_state
                movePlayerRight(right)
                break;
            case 40:
                movePlayerDown()
                break;
            case 38:
                up = key_state
                movePlayerUp(up)
                break;
            default:
        }
    };
    document.onkeyup = function (e) {
        const key_state = e.type === "keyup" ? false : true
        switch (e.keyCode) {
            case 37:
                left = key_state
                movePlayerLeft(left)
                break;
            case 39:
                right = key_state
                movePlayerRight(right)
                break;
            case 40:
                movePlayerDown()
                break;
            case 38:
                up = key_state
                movePlayerUp(up)
                break;
            default:
        }
        console.log(left)
    };
    console.log(left, right, up)
}

export default createController;


