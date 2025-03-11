const button = document.getElementById("button");
button.addEventListener("click",(e)=>{
    citation();
});
const citation = ()=>{
    const article = document.getElementById("citation").innerText;
    console.log(article);  
}