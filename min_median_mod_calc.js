const calcuate_min = (arr) => {
    let sumOFTotalNum = 0;
    for(let i = 0; i< arr.length; i++)
    { sumOFTotalNum += arr[i]; }
  
    const min = Math.floor( sumOFTotalNum / arr.length);
    return min;

}

const calcuate_midean = (arr) => {    

    let midean = [];
    for(let i = 0; i < arr.length -1; i++) {
        for(let j = i+1; j < arr.length; j++) {

            if(arr[i] > arr[j]) 
            {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
           
        }
    }

    if(arr.length % 2 != 0) {
        midean.push(arr[Math.floor(arr.length / 2)]);
        midean.push(arr[Math.floor(arr.length / 2) + 1]);
        return midean;
    }
    else {

        midean.push(arr[Math.floor(arr.length / 2)]);
        return midean;  
    }  
}


const calcuate_mod = (arr) =>  {
    let max_value = 0;
    let max_key = 0;

    let map_ = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map_.has(arr[i]))
        { map_.set(arr[i], map_.get(arr[i]) + 1);}
        else {
            map_.set(arr[i], 1);
        }
    }

    map_.forEach((values, keys) => {

        if(values > max_value)
        {
           max_value = values;
           max_key = keys;
        }
        
    })

    return max_key;
}



console.log(calcuate_min([5,4,6,7,7,8,9]));
console.log(calcuate_midean([5,4,6,7,7,8,9]));
console.log(calcuate_mod([5,4,6,7,7,8,9]));