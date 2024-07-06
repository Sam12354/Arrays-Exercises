function arrayRotations(arr, rotations) {
 
    for (let i = 1; i <= rotations; i++) {
        let currentNum = arr.shift();
        arr.push(currentNum);
    }
    
    console.log(arr.join(' '));
}
arrayRotations
([51, 47, 32, 61, 21], 2)
// ([32, 21, 61, 1], 4)
// ([2, 4, 15, 31], 5)
