function maxNumber(array){
    let newArr = [];

    for(let i = 0; i < array.length; i++){
        let isTrue = true;
        let bigNum = 0
        let firstNum = Number(array[i]);
 
        if(i + 1 > array.length - 1){
            bigNum = firstNum
        }
        for(let j = i + 1; j < array.length; j++){
            let secondNum = Number(array[j])
            if(firstNum > secondNum){
                bigNum = firstNum
            }else{
                isTrue = false;
                break;
            }
        }
 
 
        if(isTrue){
 
            newArr.push(bigNum)
        }
    }
    console.log(newArr.join(' '));
}
maxNumber
([1, 4, 3, 2])
// ([14, 24, 3, 19, 15, 17])
// ([41, 41, 34, 20])
// ([27, 19, 42, 2, 13, 45, 48])