function equalSums(array) {
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        
        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k];
        }
        
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log("no");
}
equalSums
([1, 2, 3, 3])
// ([1, 2])
// ([1])
// ([1, 2, 3])
// ([10, 5, 5, 99,

//     3, 4, 2, 5, 1,
    
//     1, 4])
