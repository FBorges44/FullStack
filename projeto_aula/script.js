function postarIdeia() {
    const nome = document.getElementById('user-name').value;
    const ideia = document.getElementById('idea-input').value;
    const mural = document.getElementById('mural');

    if (nome === '' || ideia === '') {
        alert("Por favor, preencha seu nome e sua ideia!");
        return;
    }

    // Criando o "Nó de Conhecimento"
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <h3>${nome}</h3>
        <p>${ideia}</p>
        <hr>
        <button onclick="conectar(this)" style="font-size: 12px; background: #3b82f6; color: white;">Conectar Saber</button>
        <div class="conexoes"></div>
    `;

    mural.prepend(card);

    // Limpar campos
    document.getElementById('user-name').value = '';
    document.getElementById('idea-input').value = '';
}

function conectar(btn) {
    const conexao = prompt("Como você conecta seu conhecimento a esta ideia?");
    if (conexao) {
        const divConexoes = btn.nextElementSibling;
        const p = document.createElement('p');
        p.style.fontSize = "12px";
        p.style.color = "#deff9a";
        p.innerText = `🔗 Conexão: ${conexao}`;
        divConexoes.appendChild(p);
    }
}