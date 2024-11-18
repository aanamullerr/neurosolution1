function hideAllTexts() {
    document.getElementById("text1").classList.add("botao");
    document.getElementById("text2").classList.add("botao");
    document.getElementById("text3").classList.add("botao");
    document.getElementById("text4").classList.add("botao");
}

// Botão 1
document.getElementById("dificuldades").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text1");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 1
});

// Botão 2
document.getElementById("dicas").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text2");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 2
});

// Botão 3
document.getElementById("assistencia").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text3");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 3
});

// Botão 4
document.getElementById("proveito").addEventListener("click", function() {
    hideAllTexts(); // Esconde todos os textos
    var text = document.getElementById("text4");
    text.classList.toggle("botao"); // Exibe ou oculta o texto 4
});
