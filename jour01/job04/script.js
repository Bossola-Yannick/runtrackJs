




const bisextile= annee =>{
if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)) {
    console.log(annee + " est bisextile");
    } else {
        console.log(annee + " n'est pas bisextile");
    }
}