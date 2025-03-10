console.log("hello !");
let xPremier= "";
let yPremier= "";


const sommeNombresPremiers = (x,y)=>{
    for (let i =2, end=Math.sqrt(x); i<=end;i++){
        if (x % i == 0){
            xPremier = false;
        } else xPremier = true
        }
    for (let i =2, end=Math.sqrt(y); i<=end;i++){
        if (y % i == 0){
            yPremier = false;
        } else yPremier = true
        }
        console.log(yPremier);
        console.log(xPremier);
    if (((x<2) || (y<2))){
        console.log("nombre invalide, le 1er nombre premier est 2, veuillez entrer un nombre supperieur à 2 !");
    } else {
        if ((yPremier) ){
                console.log(x + y);
                
        } else console.log("Un ou Les nombres données ne sont pas premier !");
    }
        
        
}

