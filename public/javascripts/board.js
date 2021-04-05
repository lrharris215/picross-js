import Square from './square'
class Board {
    constructor(size){
        this.grid = this.makeGrid(size)
        this.populateGrid();
    }

    makeGrid(size) {
    
        let grid = [];
        for(let i = 0; i < size; i ++) {
            grid.push(new Array(size))
        }
        return grid;
    }

    populateGrid(){
     
        for(let i = 0; i < this.grid.length; i++) {
            for( let j = 0; j < this.grid[i].length; j++){
                let square = new Square();
          
                this.grid[i][j] = square.render();
            }
        }
    }

    render() {
        let board = document.getElementById("board")
   
        if (!board) {
            console.log("NO Board")
        }
        else {
            for(let i = 0; i < this.grid.length; i ++){
                let rowDiv = document.createElement("div");
                rowDiv.className= "row-div"
                for(let j = 0; j < this.grid[i].length; j++){
                    rowDiv.append(this.grid[i][j])
                }
                debugger
                board.append(rowDiv)
            }
        return board;
        }
        
    }
}

export default Board;