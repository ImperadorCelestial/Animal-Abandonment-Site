document.addEventListener("DOMContentLoaded", () => 
  {
    const form = document.getElementById("formCadastro");
    const listaAnimais = document.getElementById("listaAnimais");
  
    form.addEventListener("submit", (e) => 
      {
      e.preventDefault();
      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  
    const animais = 
    [
      { nome: "Luna", especie: "Cachorro", image: "download.jpg" },
      { nome: "Mimi", especie: "Gato", image: "images.jpg" },
      { nome: "Tico", especie: "Coelho", image: "download (1).jpg" },
    ];
  
    animais.forEach(animal => 
      {
      const card = document.createElement("div");
      card.className = "animal-card";
      card.innerHTML = 
      `
        <img src="${animal.imagem}" alt="${animal.nome}">
        <h3>${animal.nome}</h3>
        <p>${animal.especie}</p>
        <button>Adotar</button>
      `;
      listaAnimais.appendChild(card);
    });
  });