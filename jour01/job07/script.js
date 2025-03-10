// let date =  new Date("2025-07-01");20252
result = prompt('entré date au format "2000-12-25"  !')
let date =  new Date(result);
const jourFerie = ["1/1","1/5","8/5","14/7","15/8"];
const moisNom = ["Janvier", "Février","Mars","Avril","Mai","Juin","Juillet","Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
const jourNom = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let month = date.getMonth();
let day = date.getDay();
let verifDate = `${date.getDate()}/${date.getMonth()+1}`
console.log(verifDate);

const jourTravaille = date =>{
    if (jourFerie.indexOf(verifDate) != -1){
        console.log("le " + jourNom[day]+ " " + date.getDate() +" "+ moisNom[month] +" "+ date.getFullYear() + " est un jour férié");
    }
    else if ((date.getDay() == 0) ||(date.getDay() == 6)){
        console.log("le " + jourNom[day]+ " " + date.getDate() +" "+ moisNom[month] +" "+ date.getFullYear() + " est un jour de weekEnd");
    } 
    else {
        console.log("le " + jourNom[day]+ " " + date.getDate() +" "+ moisNom[month] +" "+ date.getFullYear() + " est un jour travaillé");
    }
}

jourTravaille(date)

