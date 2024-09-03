function digitize(n) {
    let arr = []; 
    let convert = n.toString()
    
    for(let i = convert.length - 1; i >= 0; i--){
        arr.push(parseInt(convert[i]))
    }
    return arr; 
      }
    