const urlPublica = `https://maps.google.com/maps?q=${query}&output=embed`;

function buscarNoMapa() {
    const local = document.getElementById('cidadeBusca').value;
    const termoBusca = "Delegacia de Proteção à Criança e ao Adolescente em ";
    
    if (local && local.trim() !== "") {
        const query = encodeURIComponent(termoBusca + local);
        
        // google maps embed usa 'q=' para buscas
        const urlPublica = `https://www.google.com/maps?q=${query}&output=embed`;
        
        const mapaIframe = document.getElementById('mapaIframe');
        const mapaContainer = document.getElementById('mapaContainer');

        mapaIframe.src = urlPublica;
        mapaContainer.style.display = 'block';
        
        mapaContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Por favor, digite uma localização ou sua cidade.");
    }
}