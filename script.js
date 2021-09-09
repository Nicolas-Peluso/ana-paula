/*variaveis simulação*/
let forma = document.querySelector("#forma");
let recheio = document.querySelector(".recheio");
let massa = document.querySelector(".sabormassa");
let detalhes = document.querySelector("#detalhes");
let button = document.querySelector(".btnSimula");
let resposta = document.querySelector(".resposta");
let form = document.querySelector(".form");
let legendPedaço = document.querySelector(".legendPedaço");
let finalPrice = 0;
let div = document.createElement("div");

/*variaveis map*/
let map = document.querySelector(".map")
let buttonMapClose = document.querySelector(".infoMap button")
let infoMap = document.querySelector(".infoMap")

let imgs = window.document.querySelectorAll(".img img")
const maxImages = imgs.length - 1
let actualImg = 0
const next = document.querySelector(".next")
const preview = document.querySelector(".preview")
let pause = true;
let Time = 10000;
next.addEventListener("click", handleNext)
preview.addEventListener("click", handlePreview)

function handleNext() {
    pause = false
    Time += 100
    console.log(Time)
    imgs.forEach(i => i.classList.remove("ativo"))
    actualImg >= maxImages ? actualImg = 0 : actualImg++
    imgs[actualImg].classList.add("ativo")
}

function handlePreview() {
    pause = false
    Time += 100
    console.log(pause)
    imgs.forEach(i => i.classList.remove("ativo"))
    actualImg == 0 ? actualImg = maxImages : actualImg--
    imgs[actualImg].classList.add("ativo")
}

window.setTimeout(() => { pause = true }, Time > 15000 ? 1000 : Time)

window.setInterval(() => {
    if (pause) {
        console.log(pause)
        imgs.forEach(i => i.classList.remove("ativo"))
        actualImg >= maxImages ? actualImg = 0 : actualImg++
        imgs[actualImg].classList.add("ativo")
    }
}, 2000)



buttonMapClose.addEventListener("click", t => infoMap.style.display = "none")

form.addEventListener("submit", e => {
    e.preventDefault();
    simulation(forma.value, recheio.value, massa.value, detalhes.checked)
});

function simulation(forma, Recheio, Massa, Enfeite) {

    function reacheiosTrufados() {
        if (Recheio == "alpino" || Recheio == "mousse trufado" ||
            Recheio == "trufado branco" || Recheio == "trufado preto" ||
            Recheio == "trufado meio branco e meio preto" ||
            Recheio == "trufado com cereja")
            return true
        else
            return false
    }
    console.log()
    finalPrice = 0
    switch (forma) {
        case "15":
            if (Enfeite == true) finalPrice += 5;
            if (reacheiosTrufados()) finalPrice += 15
            finalPrice += 45;
            break;
        case "30":
            if (Enfeite == true) finalPrice += 5;
            if (reacheiosTrufados()) finalPrice += 15
            finalPrice += 15
            finalPrice += 70;
            break;
        case "35":
            if (Enfeite == true) finalPrice += 5;
            if (reacheiosTrufados()) finalPrice += 15
            finalPrice += 80;
            break;
        case "45":
            if (Enfeite == true) finalPrice += 5;
            if (reacheiosTrufados()) finalPrice += 15
            finalPrice += 105;
            break;
    }
    function temINfeite(e) {
        if (e == true) {
            let tem = "com enfeites";
            return tem
        }
        else {
            let naoTem = "sem enfeites";
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

let btn = document.querySelector(".button-info");
let btnNav = document.querySelector(".bolosNav");
let btnTop = document.querySelector(".goBackTop");
const gobackTop = btnTop.clientHeight;
let btnQuemSomos = document.querySelector(".QuemSomosNav");

btnTop.addEventListener("click", e => scroll({ top: -gobackTop, behavior: "smooth" }));

const items = [btn, btnNav, btnQuemSomos];

items.forEach(item => {
    item.addEventListener("click", scrollById)
});

function scrollById(event) {
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