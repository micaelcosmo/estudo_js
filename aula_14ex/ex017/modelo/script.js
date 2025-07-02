function gerarTabuada() {
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');

    if (num.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num);
        let c = 1;
        tab.innerHTML = ''; // Limpa o conteúdo anterior da tabela

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            tab.value = `tab${c}`; // Define o valor do item
            tab.appendChild(item);
            c++;
        }
    }


}