function updateLight(current) {
let light = ["green", "yellow", "red"]

for(let i = 0; i < light.length; i++){
    
    if(current === light[i]){
        return light[i + 1]
    } else if (current === "red"){
        return light[i]
    }
}

}
