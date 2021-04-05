class Square {
    constructor() {
        this.status = "unclicked"; // unclicked, filled, exed, maybe
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        debugger
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

    render() {
        let square = document.createElement("div");
        square.className="square ";
        square.className += this.status;
        square.addEventListener('click', () => console.log("click"))
        return square;
    }
   
}


export default Square;