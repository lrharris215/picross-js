import Board from './board';

class Level {
    constructor(size, valueString){
        this.size = size;
        this.valueString = valueString;
    }

    rowVals() {
        let rowsArrays = [];
        
        let temp = [];
        for(let i =0; i < this.valueString.length; i++){
            if (temp.length < this.size){
                temp.push(this.valueString[i])
                
            }else {
                rowsArrays.push(temp);
                temp = [];
            }
        }
        return rowsArrays;
    }

    colVals() {
        let colsArrays = [];
        let temp = [];

    }

}