function factorialDivision(n, d) {
    let hasil1 = 1; 
    let hasil2 = 1; 

    for(let i = n; i >= 1; i--){
            hasil1 *= i; 
    }
        
    for(let j = d; j >= 1; j--){
            hasil2 *= j; 
     }
  

    return BigInt(hasil1/hasil2); 

}

console.log((factorialDivision(5, 3))); 



/*
let hasil = 1; 

for(let i = 5; i >= 1; i--){
    hasil *= i; 
}
console.log(hasil); 
*/ 