function solution(str){
let hasil = ""; 
    for(let i = str.length - 1; i >= 0; i--){
        hasil += str[i]; 
    }
    return hasil; 
}
