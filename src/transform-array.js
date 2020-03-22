module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw 'Error';
    }
/*
    let control;
    let len = arr.length;
    for(let i=0; i<len; i++){
        control = arr[i];

        if(control === '--discard-next'){
            if(len-1 === i){
                arr.pop();
                break;
            }
            arr.splice(i, 2);
            i--;
            len = len - 2;
        }
        if(control === '--discard-prev'){
            if(i === 0){
                arr.shift();
                i--;
                len--;
                continue;
            }
            arr.splice(i-1, 2);
            i = i-2;
            len = len-2;
        }
        if(control === '--double-next'){
            if(arr.length-1 === i){
                arr.pop();
                break;
            }
            arr[i] = arr[i+1];
        }
        if(control === '--double-prev'){
            if(i === 0){
                arr.shift();
                i--;
                len--;
                continue;
            }
            arr[i] = arr[i-1];
        }
    }
*/

    while(arr.indexOf('--double-next') != -1){
        if(arr.indexOf('--double-next') === arr.length-1){
                arr.pop();
                break;
            }
            arr[arr.indexOf('--double-next')] = arr[arr.indexOf('--double-next')+1];
    }

    while(arr.indexOf('--double-prev') != -1){
        if(arr.indexOf('--double-prev') === 0){
                arr.shift();
                continue;
            }
            arr[arr.indexOf('--double-prev')] = arr[arr.indexOf('--double-prev')-1];
    }

    while(arr.indexOf('--discard-next') !=  -1){
        if(arr.indexOf('--discard-next') === arr.length-1){
                arr.pop();
                break;
            }
        arr.splice(arr.indexOf('--discard-next'), 2);
    }

    while(arr.indexOf('--discard-prev') != -1){
        if(arr.indexOf('--discard-prev') === -0){
                arr.shift();
                continue;
            }
        arr.splice(arr.indexOf('--discard-prev')-1, 2);
    }

    return arr;
};
