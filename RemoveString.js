function noSpace(x){

let x1 = x.split(' '); 
let x2 = x1.toString(); 
let hasil = ""; 

for(let i = 0; i < x2.length; i++){
    if(x2[i] === ","){
        continue; 
    } else {
        hasil += x2[i]; 
    }
}
return hasil; 
}

