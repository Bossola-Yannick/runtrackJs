const monTab = [115,55,16,22,37,31,19,28,54];
const tri = (monTab, order)=>{
    if (order === "asc"){
        console.log(monTab.sort((a,b)=>a-b));        
    } else if (order === "desc"){
        console.log(monTab.sort((a,b)=>b-a));  
    }
}
tri(monTab, "asc");
tri(monTab, "desc");
