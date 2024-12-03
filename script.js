// Inicializando o mapa com a posição do Rio de Janeiro
const map = L.map('map').setView([-22.9068, -43.1729], 12);  // Coordenadas do Rio de Janeiro

// Configurando a camada de mapa usando o OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Função para lidar com a seleção do estado (RJ ou SP)
document.getElementById('estado').addEventListener('change', function () {
    const estado = this.value;
    const zonasRj = document.getElementById('zonas-rj');

    // Se o estado selecionado for RJ, mostra a caixa de zonas
    if (estado === 'RJ') {
        zonasRj.style.display = 'block';
    } else {
        zonasRj.style.display = 'none';
    }
});

// Função para lidar com o envio do formulário
document.getElementById('clipping-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Coletando os dados do formulário
    const data = document.getElementById('data').value;
    const tipicidade = document.getElementById('tipicidade').value;
    const regiao = document.getElementById('regiao').value;
    const link = document.getElementById('link').value;

    // Exibindo os dados no console (pode ser substituído por lógica para salvar os dados)
    console.log('Dados do Clipping:');
    console.log('Data:', data);
    console.log('Tipicidade:', tipicidade);
    console.log('Região:', regiao);
    console.log('Link:', link);

    // Adicionando um marcador no mapa (apenas como exemplo)
    // Aqui você pode usar a localização ou outras informações para posicionar o marcador
    L.marker([-22.9068, -43.1729])  // Usando coordenadas do Rio de Janeiro
        .addTo(map)
        .bindPopup(`<b>Incidente: ${tipicidade}</b><br>Data: ${data}<br>Link: <a href="${link}" target="_blank">${link}</a>`)
        .openPopup();

    // Resetando o formulário após o envio
    document.getElementById('clipping-form').reset();
});
