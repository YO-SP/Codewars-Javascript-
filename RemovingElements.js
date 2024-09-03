function removeEveryOther(arr){
    let tampung = []; 
    
    for(let i = 0; i < arr.length; i++){
    
        if(i % 2 != 0){
            continue; 
        } else {
            tampung.push(arr[i])
        }
    }
    return tampung; 
      }