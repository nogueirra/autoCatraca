function quandoConfirmado(){
    var valorRecarga = document.getElementById("numMeals");
    var value = valorRecarga.value;
    var text = valorRecarga.options[valorRecarga.selectedIndex].text;

    window.location.href = `telaDePagamento.html?pay=${Math.round(value*5.6*100)/100}`

    console.log("funcionou")
}

function atualizarValor(){
    valores = document.querySelectorAll('strong')
    
    const urlParams = new URLSearchParams(window.location.search);
    valor = urlParams.get('pay')
    valor = parseFloat(valor).toFixed(2)
    valor = valor.replace('.',',')

    i = 0
    while(i < valores.length){
        valores[i].innerText = `R$ ${valor}`
        i++
    }
}

function atualizarSaldo2(){
    elemento = document.querySelector('#currentBalance')
    
    if(!localStorage.key('saldo_fump')){
        localStorage.setItem('saldo_fump',0)
    }

    saldo = localStorage.getItem('saldo_fump')

    saldo = parseFloat(saldo).toFixed(2)
    saldo = saldo.replace('.',',')
    
    elemento.innerText = `R$ ${saldo}`
}

function atualizarSaldo(){
    const urlParams = new URLSearchParams(window.location.search);
    recarga = urlParams.get('pay')
    recarga = parseFloat(recarga)
    
    valor = localStorage.getItem('saldo_fump') | 0

    novoSaldo = parseFloat(recarga + valor).toFixed(2)
    localStorage.setItem("saldo_fump", novoSaldo);
}

function confirmarPagamento(){
    atualizarSaldo()
    window.location.href = `index.html`

}