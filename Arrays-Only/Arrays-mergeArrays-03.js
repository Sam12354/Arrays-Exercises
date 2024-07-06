function mergeArrays(arr1, arr2){
    let thirdArr = [];
    let even = ''
    let odd = ''
    for(let i = 0; i < arr1.length; i++){
        let firstArr = arr1[i]
        let secondArr = arr2[i]

        if(i % 2 !== 0){
            odd = firstArr + secondArr
            thirdArr.push(odd)
        }else{
            let firstArr = Number(arr1[i]);
            let secondArr = Number(arr2[i]);
            even = firstArr + secondArr
            thirdArr.push(even)
        }
    }
    console.log(thirdArr.join(' - '));
}
mergeArrays
(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])

// (['13', '12312', '5', '77', '4'],

// ['22', '333', '5', '122', '44'])
