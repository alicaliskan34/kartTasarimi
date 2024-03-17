let cvvinput = document.querySelector(".cvvinput");
let gonderbutton = document.querySelector(".gonder");
let carddiv = document.querySelector(".card");


let cardnumbertextalan = document.querySelector(".textalancardnumber");
let inputcardnumber = document.querySelector(".inputcardnumber");

inputcardnumber.oninput = () => {
    cardnumbertextalan.innerText = inputcardnumber.value;
}

let inputkartsahibi = document.querySelector(".inputkartsahibi");
let kartsahibitext = document.querySelector(".kartsahibitext");

inputkartsahibi.oninput = () => {
    kartsahibitext.innerText = inputkartsahibi.value;
}

let ayinput = document.querySelector(".ayinput");
let aytextarea = document.querySelector(".aytextarea");


ayinput.oninput = () => {
    aytextarea.innerText = ayinput.value + " /";
}

let yilinput = document.querySelector(".yilinput");
let yiltextarea = document.querySelector(".yiltextarea");

yilinput.oninput = () =>{
    yiltextarea.innerText = yilinput.value;
}


let cvvtexts = document.querySelector(".cvvtexts");
let cvvinputs = document.querySelector(".cvvinput");
let cardarkayuz = document.querySelector(".arka");
let cardonyuz = document.querySelector(".on"); 


cvvinputs.onmouseenter = () => {
    cardonyuz.classList.add('hide'); // Ön yüzü gizle
    cardarkayuz.classList.add('show'); // Arka yüzü göster
}

cvvinputs.onmouseleave = () => {
    cardarkayuz.classList.remove('show'); // Arka yüzü gizle
    cardonyuz.classList.remove('hide'); // Ön yüzü göster
}

cvvinputs.oninput = () => {
    cvvtexts.innerText=cvvinputs.value;
}
