const rodyti = document.getElementById("Rodyk");
const maisyti = document.getElementById("maisyk");
rodyti.addEventListener("click",rodymas);
maisyti.addEventListener("click", maisymas);

function rodymas() {
    var nuotraukos = document.getElementById("galerija");
    var mygtukasmaisyti = document.getElementById("maisyk")
    if (nuotraukos.style.display === "none" && mygtukasmaisyti.style.display ==="none") {
        nuotraukos.style.display = "block";
        mygtukasmaisyti.style.display ="inline-block";
        document.getElementById("Rodyk").value = "Nerodyti";
    } else {
        nuotraukos.style.display = "none";
        mygtukasmaisyti.style.display="none";
        document.getElementById("Rodyk").value = "Rodyti";
    }
}
function maisymas(){
let nuotraukos = document.querySelectorAll("img");
let kieknuotrauku = nuotraukos.length;
let random, keisti;
while (kieknuotrauku>0){
    random=Math.floor(Math.random()*kieknuotrauku);
    kieknuotrauku--;
    keisti=nuotraukos[kieknuotrauku].src;
    nuotraukos[kieknuotrauku].src=nuotraukos[random].src;
    nuotraukos[random].src=keisti;
}}
