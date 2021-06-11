var pedaços = document.querySelector("#pedaco")
var recheio = document.querySelector(".recheio")
var massa = document.querySelector(".sabormassa")
var detalhes = document.querySelector("#detalhes")
var button = document.querySelector(".btnSimula")
var resposta = document.querySelector(".resposta")
var form = document.querySelector(".form")
var legendPedaço = document.querySelector(".legendPedaço")
var finalPrice = 0
var div = document.createElement("div")

form.addEventListener("submit", e => {
    e.preventDefault()

    verify()

})

function verify(){
    div.style.display = "none"
    if(pedaços.value <= 150 && pedaços.value >= 30){
        legendPedaço.classList.add("green")
        legendPedaço.classList.remove("red")

        simulation(pedaços.value, recheio.value, massa.value, detalhes.checked)
    }
    else{
        legendPedaço.classList.remove("green")
        legendPedaço.classList.add("red")
    }
    
}

function simulation(Pedaços, Recheio, Massa, Enfeite){

    

    if(Pedaços >= 30 && Pedaços < 39){
        finalPrice = 50
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
   else if(Pedaços >= 40 && Pedaços < 49){
        finalPrice = 60    
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
}
    else if(Pedaços >= 50 && Pedaços < 59){
        finalPrice = 70
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 60 && Pedaços < 69){
        finalPrice = 80
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 70 && Pedaços < 79){
        finalPrice = 90
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 80 && Pedaços < 89){
        finalPrice = 100
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 90 && Pedaços < 99){
        finalPrice = 110
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 100 && Pedaços < 109){
        finalPrice = 120
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 110 && Pedaços < 119){
        finalPrice = 130
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 120 && Pedaços < 129){
        finalPrice = 140
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 130 && Pedaços < 139){
        finalPrice = 150  
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
    }
    else if(Pedaços >= 140 && Pedaços <= 150){
        finalPrice = 160  
        if(Enfeite == true){
            finalPrice = finalPrice + 10
        }
      }

      function temINfeite(e){
        if(e == true){
            var tem = "com enfeites"
            return tem
        }
        else{
            var naoTem = "sem enfeites"
            return naoTem
        }
      }

       div.innerHTML = `<p>seu bolo de ${Recheio} com a massa de ${Massa}, ${temINfeite(Enfeite)}, fica em ${finalPrice},00R$  <br></p>
      <p class="red">NOTA!</p><p id="teste"> para fazer o pedido do bolo basta nos enviar uma menssagem pelos meios indicado a cima</p>
      `
      resposta.appendChild(div)
      resposta.style.display = "block"
      div.style.display = "block"

    }


var btn = document.querySelector(".button-info")
var simulaPage = document.querySelector(".containerSimula")
var heigthSimula = simulaPage.clientHeight

btn.addEventListener("click", e => scrollSimula(heigthSimula))

var btnNav = document.querySelector(".bolosNav")
var cakePage = document.querySelector(".container-scroll") 
var heigthCake = cakePage.clientHeight

btnNav.addEventListener("click", ex => cake(heigthCake))

var image = document.querySelector(".imagem")
var btn = document.querySelector(".goBackTop")
var heigthImage = image.clientHeight

btn.addEventListener("click", er => scrollTop())

function scrollTop(){
    window.scrollTo({
        top: heigthImage - 959,
        behavior: "smooth"
    })
}
function scrollSimula(h){
        window.scrollTo({
            top: h + 350,
            behavior:"smooth"
    })
}
function cake(hC){
    window.scrollTo({
        top: hC + 600,
        behavior: "smooth"
    })
}