describe('bubble sort', function() {
    it('should sort array with 10 elements', function() {
        let array = [2, 5, 6, 4, 10, 3, 1, 7, 8, 9];
        let myResults = sortArray(array);
        let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        expect(myResults).toEqual(result);
    })
    it('should sort array with 8 elements', function() {
        let array = [6, 1, 4, 2, 8, 7, 5, 3];
        let myResults = sortArray(array);
        let result = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(myResults).toEqual(result);
    })
    it('should sort array with 5 elements', function() {
        let array = [2, 5, 4, 3, 1];
        let myResults = sortArray(array);
        let result = [1, 2, 3, 4, 5];
        expect(myResults).toEqual(result);
    })
})