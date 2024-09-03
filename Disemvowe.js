function disemvowel(str) {

    let hasil = ""; 

    for(let i = 0; i < str.length; i++){

        if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o'
        || str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O'){
            continue; 
        } else {
            hasil += str[i]; 
        }
    }
    return hasil; 
  }

 