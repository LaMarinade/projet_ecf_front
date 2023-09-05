if (window.location.pathname.endsWith('recap.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Récupération des données depuis les paramètres d'URL
    const client = urlParams.get('client');
    const date = urlParams.get('date');
    const observation = urlParams.get('observation');

    // Affectation des données récupérées aux éléments de recap.html
    document.getElementById('clientName').textContent = client;
    document.getElementById('interventionDate').textContent = date;
    document.getElementById('observationDetails').textContent = observation; 
}
