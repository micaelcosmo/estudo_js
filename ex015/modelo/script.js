function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var img = document.createElement('img');
    if (fAno.value.lenght == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-criança.jpg');

            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homem-jovem.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'homem-idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-criança.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'mulher-idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`;
        res.appendChild(img);
    }
}