function hideAllTexts() {
    document.getElementById("text1").classList.add("botao");
    document.getElementById("text2").classList.add("botao");
    document.getElementById("text3").classList.add("botao");
}

// Botão 1
document.getElementById("definicao").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text1");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 1
});

// Botão 2
document.getElementById("sintomas").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text2");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 2
});

// Botão 3
document.getElementById("diagnostico").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text3");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 3
});

