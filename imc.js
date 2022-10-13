function calcular() {
    let peso = Number(document.getElementById('valorPeso').value)
    let altura = Number(document.getElementById('valorAltura').value)

    let divHtml = document.getElementById('calculeIMC')
    let imc = peso / Math.pow(altura, 2)
    divHtml.innerHTML = `O valor do seu IMC é  ${imc.toFixed(2)}`

    aplicarEstilos(divHtml)
    //funcao aplicarEstilos recebe variavel divHtml e aplica estilos chamados elementoHtml.
    //aplicarEstilos(divHtml) =
    //divHtml.classList.remove("d-none")
    //divHtml.classList.add("d-flex")
    //divHtml.classList.add("justify-content-center")
    //divHtml.classList.add("alert")
    //divHtml.classList.add("alert-success")
}

function aplicarEstilos(elementoHtml) {
    //substitua d-none por d-flex
    elementoHtml.classList.remove("d-none")
    elementoHtml.classList.add("d-flex")
    //adicione demais classes via js
    elementoHtml.classList.add("justify-content-center")
    elementoHtml.classList.add("alert")
    elementoHtml.classList.add("alert-success")
    elementoHtml.classList.add("mb-0")
}