let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let numero = document.getElementById("numero").value;
  let email = document.getElementById("email").value;
  let senha_ = document.querySelectorAll("#combo");
  const element = document.getElementById("combo")
  let senha = element.options[element.selectedIndex].value;
  console.log(senha)

  let data = {
    nome,
    numero,
    email,
    senha
  };

  try {
    const response = await fetch('http://localhost:3005/api/store/form', {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
      if(senha == "sim"){
        alert(content.message);
        window.location.href = 'https://t.me/+Oq4Gd820KDwyYmIx'
      }else{
        window.location.href = '../tela 11/index.html'
      }
    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
  }
};