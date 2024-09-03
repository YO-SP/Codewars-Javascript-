String.prototype.toAlternatingCase = function () {
    let hasil = ""; 
    
      for(let i = 0; i < this.length; i++){
    
          if(this[i] === this[i].toUpperCase()){
            hasil += this[i].toLowerCase(); 
          } else {
            hasil += this[i].toUpperCase(); 
          }
      }
      return hasil; 
    }

    