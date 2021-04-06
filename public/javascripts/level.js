import Board from './board';

class Level {
    constructor(size, valueString) {
        this.size = size;
        this.valueString = valueString;
    }

    rowVals() {
        let rowsArrays = [];

        let temp = [];
        for (let i = 0; i < this.valueString.length; i++) {
            if (temp.length < this.size) {
                temp.push(this.valueString[i]);
            } else {
                rowsArrays.push(temp);
                temp = [this.valueString[i]];
            }
        }

        return rowsArrays;
    }

    colVals() {
        let colsArrays = new Array(this.size);
        for (let i = 0; i < colsArrays.length; i++) {
            colsArrays[i] = [];
        }
        debugger;
        for (let i = 0; i < this.valueString.length; i++) {
            for (let j = 0; j < this.size; j++) {
                debugger;
                colsArrays[j].push(this.valueString[i]);
            }
        }
        debugger;
        return colsArrays;
    }

    getNums(vals) {
        let nums = [];
        for (let i = 0; i < vals.length; i++) {
            let temp = [];
            let count = 0;
            for (let j = 0; j < vals[i].length; i++) {
                debugger;
                if (vals[i][j] === 0) {
                    if (count !== 0) {
                        temp.push(count);
                    }
                    count = 0;
                }
                if (vals[i][j] === 1) {
                    count += 1;
                }
                if (j === vals[i].length - 1 && count !== 0) {
                    debugger;
                    temp.push(count);
                    nums.push(temp);
                }
            }
        }
    }
}

export default Level;
