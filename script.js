var forma = document.querySelector("#forma");
var recheio = document.querySelector(".recheio");
var massa = document.querySelector(".sabormassa");
var detalhes = document.querySelector("#detalhes");
var button = document.querySelector(".btnSimula");
var resposta = document.querySelector(".resposta");
var form = document.querySelector(".form");
var legendPedaço = document.querySelector(".legendPedaço");
var finalPrice = 0;
var div = document.createElement("div");

form.addEventListener("submit", e => { 
    e.preventDefault();
    simulation(forma.value, recheio.value, massa.value, detalhes.checked)});

function simulation(forma, Recheio, Massa, Enfeite){

    finalPrice = 0
    switch(forma){
        case "15":
            if(Enfeite == true) finalPrice += 5;
            if(Recheio == "alpino" || Recheio == "mousse trufado" || Recheio == "trufado branco" || Recheio == "trufado preto" || Recheio == "trufado meio branco e meio preto" || Recheio == "trufado com cereja") finalPrice += 15
            finalPrice += 45;
            break;
        case "30":
            if(Enfeite == true) finalPrice += 5;
            if(Recheio == "alpino" || Recheio == "mousse trufado" || Recheio == "trufado branco" || Recheio == "trufado preto" || Recheio == "trufado meio branco e meio preto" || Recheio == "trufado com cereja") finalPrice += 10
            finalPrice += 70;
            break;
        case "35":
            if(Enfeite == true) finalPrice += 5;
            if(Recheio == "alpino" || Recheio == "mousse trufado" || Recheio == "trufado branco" || Recheio == "trufado preto" || Recheio == "trufado meio branco e meio preto" || Recheio == "trufado com cereja") finalPrice += 10
            finalPrice += 80;
            break;
        case "45":
            if(Enfeite == true) finalPrice += 5;
            if(Recheio == "alpino" || Recheio == "mousse trufado" || Recheio == "trufado branco" || Recheio == "trufado preto" || Recheio == "trufado meio branco e meio preto" || Recheio == "trufado com cereja") finalPrice += 10
            finalPrice += 105;
            break;
    }
      function temINfeite(e){
        if(e == true){ 
            var tem = "com enfeites";
             return tem
        }
        else{
            var naoTem = "sem enfeites";
            return naoTem
        }
      }

       div.innerHTML = `<p>seu bolo de ${Recheio} com a massa de ${Massa} e forma de ${forma} pedaços, ${temINfeite(Enfeite)}, fica em ${finalPrice},00R$  <br></p> <p class="red">ATENÇÃO!</p>
       <p>SE O RECHEIO DO BOLO POSSUIR FRUTA(S) UM ACRESSIMO DE 5R$ SERÁ COBRADO</p>`;
       resposta.appendChild(div);
       resposta.style.display = "block";
       div.style.display = "block"
}


var btn = document.querySelector(".button-info");
var simulaPage = document.querySelector(".containerSimula");
var heigthSimula = simulaPage.clientHeight;

btn.addEventListener("click", e => scrollSimula(heigthSimula));
var btnNav = document.querySelector(".bolosNav");
var cakePage = document.querySelector(".container-scroll");
var heigthCake = cakePage.clientHeight;

btnNav.addEventListener("click", ex => cake(heigthCake));

var image = document.querySelector(".imagem");
var btn = document.querySelector(".goBackTop");
var heigthImage = image.clientHeight;

btn.addEventListener("click", er => scrollTop());

function scrollTop(){ window.scrollTo({
    top: heigthImage - 959, 
    behavior: "smooth"
}
)};

function scrollSimula(h){
        window.scrollTo({
            top: h + 350,
            behavior:"smooth"
    })
};
function cake(hC){
    window.scrollTo({
        top: hC + 600,
        behavior: "smooth"
    })
};