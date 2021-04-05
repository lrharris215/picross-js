class Square {
    constructor() {
        this.status = "unclicked"; // unclicked, filled, exed, maybe
        this.value = 0;
    }

    handleClick() {
        if (this.status=== "filled") {
            this.status = 'unclicked';
            this.value = 0;
        }else {
            this.status === "filled";
            this.value = 1;
        }
    }

    handleRightClick() {
        if (this.status === "exed") {
            this.status = "unclicked";
            this.value = 0;
        }else {
            this.status = "exed"
            this.value = 0;
        }
    }

    handleMiddleClick() {
        if (this.status === "maybe") {
            this.status = "unclicked";
            this.value = 0;
        }else {
            this.status = "maybe";
            this.value = 0;
        }
    }
}


export default Square;