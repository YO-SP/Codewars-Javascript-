function getCount(str) {

let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o'){
        count += 1; 
    } else {
        count += 0; 
    }

}
return count; 
}

