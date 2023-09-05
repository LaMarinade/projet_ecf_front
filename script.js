if (window.location.pathname.endsWith('recap.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    
    const client = urlParams.get('client');
    const date = urlParams.get('date');
    const observation = urlParams.get('observation');


    document.getElementById('clientName').textContent = client;
    document.getElementById('interventionDate').textContent = date;
    document.getElementById('observationDetails').textContent = observation; 
}
