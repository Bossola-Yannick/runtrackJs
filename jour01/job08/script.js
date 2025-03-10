const sommeNombresPremiers = (x,y)=>{
    let xPremier= true;
    let yPremier= true;

    if (((x<2) || (y<2))){
        console.log("nombre invalide, le 1er nombre premier est 2, veuillez entrer un nombre supperieur à 2 !");
    }
    for (let i =2, end=Math.sqrt(x); i<=end;i++){
        if (x % i == 0){
            xPremier = false;
            break;
        }
    }
    for (let i =2, end=Math.sqrt(y); i<=end;i++){
        if (y % i == 0){
            yPremier = false;
            break;
        }
    }
    if (yPremier && xPremier ){
                console.log(x + y);
                
    } else console.log("Un ou Les nombres données ne sont pas premier !");
      
}
