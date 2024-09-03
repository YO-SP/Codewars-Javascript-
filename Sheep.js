var countSheep = function (num){
    let hasil = "";

    if (num > 0){
    for (let i = 1; i <= num; i++){
        hasil += ( i + " sheep...")
    }
    } else {
        return ''; 
    } 
    return hasil; 
  }
