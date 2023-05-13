const chaveapi = "8872410b5b1aedf65bcd58f2a7439315"

function funciaoclique() {
    let cidade = document.querySelector(".nome_cidade").value
    buscarcidade(cidade)
}

function buscarcidade(cidade) {
    const dados = await fetch (`api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveapi}`).then( resosta => resposta.jason())

    console.log(dados)
}