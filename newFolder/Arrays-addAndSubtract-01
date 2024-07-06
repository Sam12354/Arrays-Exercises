function addAndSubtract(array){
    let arrayNums = array.map(Number)
    let newArr = [];
    let even = 0;
    let odd = 0;

    for(let num of arrayNums){
        even += num
    }

    for(let i = 0; i < arrayNums.length; i++){
        let curNum = arrayNums[i];

        if(curNum % 2 === 0){
            curNum += i 
            newArr.push(curNum);
        }else if(curNum % 2 !== 0){
            curNum -= i
            newArr.push(curNum)
        }
    }

    for(let num of newArr){
        odd += num
    }

    console.log(`[ ${newArr.join(', ')} ]`);

    console.log(even);
    console.log(odd);
}
addAndSubtract
([5, 15, 23, 56, 35])
