function maxSequenceOfEqual(arr) {
    let sequence = [];
    let length = 0;

    for (let i = 0; i < arr.length; i++) {
        let curSequence = [];
        let curLength = 0;

        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                curSequence.push(arr[j]);
                curLength++;
            } else {
                break;
            }
        }

        if (curLength > length) {
            length = curLength;
            sequence = curSequence;
        }
    }

    console.log(sequence.join(' '));
}
maxSequenceOfEqual
([0, 1, 1, 5, 2, 2, 6, 3, 3])
// ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// ([1, 1, 1, 2, 3, 1, 3, 3])
// ([4, 4, 4, 4])
