function grow(x){
    let hasil = 1; 

    for (let i = 0; i < x.length; i++){
        hasil *= x[i]
    }
    return(hasil)
}
console.log(grow([1, 2, 3, 4]))