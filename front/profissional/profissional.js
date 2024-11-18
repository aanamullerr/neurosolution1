let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
  event.preventDefault();

  let form = document.getElementById("formulario");
  let dadosForm = new FormData(form);

  try {
    const response = await fetch('http://localhost:3005/api/store/profissional', {
      method: "POST",
      body: dadosForm
    });

    let content = await response.json();

    if (content.success) {
      alert(content.message);
      window.location.href = '../catalogo/index.html';
    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
  }
};