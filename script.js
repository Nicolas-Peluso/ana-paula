
/*variaveis simulação*/
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

/*variaveis map*/
var map = document.querySelector(".map")
var buttonMapClose = document.querySelector(".infoMap button")
var infoMap = document.querySelector(".infoMap")

buttonMapClose.addEventListener("click", t => infoMap.style.display = "none")


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
       <p>RECHEIOS COM FRUTA(S) TERA UM ACRESSIMO DE 5R$</p>`;
       resposta.appendChild(div);
       resposta.style.display = "block";
       div.style.display = "block"
       map.style.display = "block"
};

var btn = document.querySelector(".button-info");
var btnNav = document.querySelector(".bolosNav");
var btnTop = document.querySelector(".goBackTop");
const gobackTop = btnTop.clientHeight;
var btnQuemSomos = document.querySelector(".QuemSomosNav");

btnTop.addEventListener("click", e => scroll({top: -gobackTop, behavior:"smooth"}));

const items = [btn, btnNav, btnQuemSomos];

items.forEach(item => {
    item.addEventListener("click", scrollById)
});

function scrollById(event){
    event.preventDefault(); 

    const element = event.target;
    const atribut = element.getAttribute('href');
    const section = document.querySelector(atribut);
    const sectionTop = section.offsetTop;

     scroll({
         top: sectionTop,
         behavior: "smooth"
        })
};