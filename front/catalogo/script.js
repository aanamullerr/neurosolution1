let button = document.getElementById("handleSubmit");
let buttonVoltar = document.getElementById("voltarButton");

document.addEventListener("DOMContentLoaded",async function(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3005/api/store/selectProf', {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    });

    let content = await response.json();
    console.log(content);
  
    if (content.success) {
      let imgLista = document.getElementById("li-img"); 
      let nomeLista = document.getElementById("li-nome"); 
      let numeroLista = document.getElementById("li-numero");
      let emailLista = document.getElementById("li-email");
      let descricaoLista = document.getElementById("li-descricao");
      let contador = 0;
      console.log(imgLista)
      imgLista.setAttribute('src', `../../back/src/uploads/${content.data[contador].imagem}`) 
      nomeLista.textContent = content.data[contador].nome
      numeroLista.textContent = content.data[contador].numero
      emailLista.textContent = content.data[contador].email
      descricaoLista.textContent = content.data[contador].descricao
      button.onclick = () =>{
        contador++;
        console.log(contador)
        console.log(imgLista) 
        imgLista.setAttribute('src', `../../back/src/uploads/${content.data[contador].imagem}`) 
        nomeLista.textContent = content.data[contador].nome
        numeroLista.textContent = content.data[contador].numero
        emailLista.textContent = content.data[contador].email
        descricaoLista.textContent = content.data[contador].descricao
      }
      buttonVoltar.onclick = () =>{
        contador--;
        console.log(contador)
        console.log(imgLista)
        imgLista.setAttribute('src', `../../back/src/uploads/${content.data[contador].imagem}`) 
        nomeLista.textContent = content.data[contador].nome
        numeroLista.textContent = content.data[contador].numero
        emailLista.textContent = content.data[contador].email
        descricaoLista.textContent = content.data[contador].descricao
      }
    } else {
      alert(content.message);
    }
  } catch (error) {
    alert('Falha ao conectar com o servidor.');
    alert(error)
  }
})  