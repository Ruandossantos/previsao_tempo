const chaveapi = "8872410b5b1aedf65bcd58f2a7439315"

function mostarnatela(dados){
    console.log(dados)
    document.querySelector(".nome_cidade_tempo").innerHTML= dados.name
    document.querySelector(".graus_city").innerHTML= Math.floor(dados.main.temp) + " ºc"
    document.querySelector(".nubla_umidade").innerHTML= dados.weather[0].description
    document.querySelector(".umidade").innerHTML="Humidade "+ dados.main.humidity
    document.querySelector(".img_nuvem").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function buscarcidade(cidade) {
   const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveapi}&lang=pt_br&units=metric`).then(resposta => resposta.json())
   mostarnatela(dados)
}


function funciaoclique() {
    let cidade = document.querySelector(".nome_cidade").value
    buscarcidade(cidade)
}