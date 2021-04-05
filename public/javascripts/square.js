class Square {
    constructor() {
        this.status = "unclicked"; // unclicked, filled, exed, maybe
    }

    handleClick() {
        if (this.status=== "filled") {
            this.status = 'unclicked';
        }else {
            this.status === "filled"
        }
    }

    handleRightClick() {
        if (this.status === "exed") {
            this.status = "unclicked";
        }else {
            this.status = "exed"
        }
    }

    handleMiddleClick() {
        if (this.status === "maybe") {
            this.status = "unclicked"
        }else {
            this.status = "maybe"
        }
    }
}


export default Square;