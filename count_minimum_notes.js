const count_minimum_change_notes = (num) => {
    let change_arr = [2000,500, 200, 100, 50, 10, 5, 2, 1];
    let change_map = new Map();
    let change_amt_str = "";

    for(let i = 0; i < change_arr.length; i++) 
    {
        while(num >= change_arr[i])
        {
            num = num - change_arr[i];
            //console.log(num);
            // change.push(change_arr[i]);
            if(change_map.has(change_arr[i])) {
                change_map.set(change_arr[i], change_map.get(change_arr[i]) + 1);
            }
            else {
                change_map.set(change_arr[i], 1);
            }
        }
    }

    change_map.forEach((values, keys) => {
        change_amt_str += keys + "*" + values + "\n";
    })

   
    return change_amt_str;
}


console.log(count_minimum_change_notes(2450));