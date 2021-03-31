describe('Search', function() {
    it('should do linear search through the array and find the matching index', function() {
        let result = linear(8, [1, 5, 6, 2, 4, 9, 3, 10, 7, 8]);
        expect(result).toEqual(9);
    })
    it('should do a binary search through the array and find the matching index', function() {
        let result = binary(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(result).toEqual(7);
    })
    it('should prove that a binary search cannot loop through the unsorted array and find the matching index', function() {
        let result = binary(5, [10, 5, 6, 3, 4, 2, 8, 7, 1, 9]);
        expect(result).toEqual(-1);
    })
    it('should prove that a binary search cannot loop through the unsorted array and find the matching index', function() {
        let binaryCount = 0;
        let linearCount = 0;
        for(i = 0; i < 10; i++) {
            console.log('binary', i, binaryCount);
            let l0 = performance.now()
            linear(8, [1, 5, 6, 2, 4, 9, 3, 10, 7, 8]);   // <---- The function you're measuring time for 
            let l1 = performance.now()
            let linearTime = l1 - l0;
            let b0 = performance.now()
            binary(8, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // <---- The function you're measuring time for 
            let b1 = performance.now()
            let binaryTime = b1 - b0;
            if(binaryTime < linearTime) {
                binaryCount++;
            }
            else{
                linearCount++;
            }
        }
        expect(binaryCount > linearCount).toEqual(true);
    })
    // it('should search thorugh the array and find the matching value', function() {
    //     let result = search.binaryLoop(data, 4);
    //     expect(result).toEqual(4);
    // })
    // it('should search thorugh the array and find the matching value', function() {
    //     let result = search.binaryRecursive(data, 4);
    //     expect(result).toEqual(4);
    // })
    // it('should search thorugh the array and find the matching value', function() {
    //     let result = search._binarySearch(data, 4);
    //     expect(result).toEqual(4);
    // })
})