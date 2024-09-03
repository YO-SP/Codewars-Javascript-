function dnaStrand(dna){
let hasil = ""; 

  for(let i = 0; i < dna.length; i++){
    
    switch(dna[i]){

      case 'A': 
          hasil += 'T'; 
        break;
      
      case 'T': 
          hasil += 'A'; 
        break; 

      case 'C':
          hasil += 'G'; 
        break; 

      case 'G':
          hasil += 'C'
        break; 
    }
  }
  return hasil; 
  }


