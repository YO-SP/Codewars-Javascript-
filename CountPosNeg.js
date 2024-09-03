function countPositivesSumNegatives(input) {
    let hasil1 = 0; 
    let hasil2 = 0;
    let hasil3 = []; 
      
    for(let i = 0; i < input.length; i++){
        
        if(input[i] > 0 ){
            hasil1++;
            hasil3.push(hasil1)
            
       } else if (input[i] === 0) {
            const hasil3 = [];  
            
       } else {
        hasil2 += input[i]
        hasil3.push(hasil2)
       }
       
      }
    
    
    return hasil3; 
    }
    console.log(countPositivesSumNegatives([1,2,-1,-2]))