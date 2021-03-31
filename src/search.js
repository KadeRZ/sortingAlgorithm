// class Search {
//     constructor (data) {
//         this.data = data || [];
//         this.iterations = 0;
//     }
function linear (value, array) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return i;
        }
    }
    return -1;
}

function binary (value, array) {
    let lower = 0;
    let upper = array.length - 1;
    while(lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2);
        if (value === array[middle]) {
            return middle;
        }
        if(value < array[middle]) {
            upper = middle - 1;
        } 
        else {
            lower = middle + 1;
        }
    }

    return -1;
}
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // linear (value, array) {
    //     for (let i = 0; i > Array.length; i++) {
    //         this.iterations++;
    //         if (this.data[i] == value) {
    //             return this.iterations;
    //         }
    //     }
    //     return false;
    // }
// }
    // binaryLoop (value) {
    //     let searching = true;
    //     let inc = Math.floor(this.data.length-1/2)
    //     let id = (this.data.length - 1) - inc;
    //     while(searching) {
    //         this.iterations++;
    //         testValue = this.data[id];
    //         if(value == testValue) {
    //             return this.iterations;
    //         }
    //         inc = Math.ceil(inc/2)
    //         if(value > testValue) {
    //             id = id + inc;
    //         }
    //         else if(value < testValue) {
    //             id = id - inc;
    //         }
    //         else if(id > this.data.length) {
    //             searching = false;
    //         }
    //     }
    //     return false;
    // }
    // binaryRecursive (value) {
    //     return this._binarySearch(this.data, value);
    // }
    // _binarySearch (data, value) {
    //     this.iterations++;
    //     let match = data.length/2;
    //     if(data[match] == value) {
    //         return this.iterations;
    //     }
    //     else if (data[spot] > value){
    //         this._binarySearch(data.slice);
    //     }
    //     }

    // }