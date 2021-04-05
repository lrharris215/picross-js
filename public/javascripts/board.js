import Square from './square'
class Board {
    constructor(size){
        this.grid = this.makeGrid(size)
        debugger
        this.populateGrid();
    }

    makeGrid(size) {
        debugger
        let grid = [];
        for(let i = 0; i < size; i ++) {
            grid.push(new Array(size))
        }
        return grid;
    }

    populateGrid(){
        debugger
        for(let i = 0; i < this.grid.length; i++) {
            for( let j = 0; j < this.grid[i].length; j++){
                let square = document.createElement('div');
                square.className = "square";
            }
        }
    }
}

export default Board;