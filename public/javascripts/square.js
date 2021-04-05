class Square {
    constructor() {
        this.status = "unclicked"; // unclicked, filled, exed, maybe
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
        this.square = document.createElement("div");
        this.square.addEventListener('click', () => this.handleClick())

    }

    handleClick() {
   
        if (this.status === "filled") {
         
            this.status = 'unclicked';
            this.value = 0;
          
        }else {
           
            this.status = "filled";
            this.value = 1;
        }
        this.render();
        return;
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
        
        this.square.className="square ";
        this.square.className += this.status;
        return this.square;
    }
   
}


export default Square;