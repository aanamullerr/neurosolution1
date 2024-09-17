let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let numero = document.getElementById("numero").value;
  let email = document.getElementById("email").value;
  let descricao = document.getElementById("descricao").value;

  let data = {
    nome,
    numero,
    email,
    descricao
  };

  try {
    const response = await fetch('http://localhost:3003/api/store/profissional', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      alert(content.message);
      window.location.href = '../tela 11/index.html';
    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
  }
};