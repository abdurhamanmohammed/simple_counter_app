const counter=document.getElementById("cont");
const increas=document.getElementById("btn-inc");
const decreas=document.getElementById("btn-dec");
const resat=document.getElementById("btn-res");
const ala=document.querySelectorAll(".btn");
console.log(decreas);

let cou=0;
ala.forEach(function(ala){
    ala.addEventListener("click",function(e){
        let style=e.currentTarget.classList;
        if(style.contains("first")){
            cou++;
        }
        else if(style.contains("three")){
            cou--;
        }
        else{
            cou=0;
        }
        if(cou>0){
            counter.style.color="green";
        }
        else if(cou<0){
            counter.style.color="red";
        }
        else{
            counter.style.color="black";
        }
        counter.innerHTML=cou;
    })
    
});
