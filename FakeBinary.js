function fakeBin(x){
let penampung = ""; 

for (let i = 0; i < x.length; i++){
    if (x[i] < 5){
       penampung += "0"
    } else {
       penampung += "1"
    }
}
return penampung; 
}

