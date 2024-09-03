function removeExclamationMarks(s) {
let hasil = ""; 
    for(let i = 0; i < s.length; i++){
        if (s[i] === "!"){
            continue; 
        } else {
            hasil += s[i]; 
        }
    }
    return(hasil)
}
//console.log(removeExclamationMarks("Hello World!"))