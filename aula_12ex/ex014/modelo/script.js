function carregar() {
    var data = new Date();
    var hora = data.getHours();
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        if (hora < 6) {
            // Madrugada
            msg.innerHTML += " Boa madrugada!";
            img.src = "noite.jpg";
            document.body.style.background = "#515154";
        } else {
            // Bom dia
            msg.innerHTML += " Bom dia!";
            img.src = "manha.jpg";
            document.body.style.background = "#e2cd9f";
        }
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        msg.innerHTML += " Boa tarde!";
        img.src = "tarde.jpg";
        document.body.style.background = "#b9846f";
    } else {
        // Boa noite
        msg.innerHTML += " Boa noite!";
        img.src = "noite.jpg";
        document.body.style.background = "#515154";
    }
}