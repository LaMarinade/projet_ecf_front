if (window.location.pathname.endsWith('recap.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const nom = urlParams.get('nom');
    const date = urlParams.get('date');
    const vitrerie = urlParams.get('vitrerie');
    const aspirateur = urlParams.get('aspirateur');
    const entretien = urlParams.get('Entretien');

    let interventionTypes = [];
    if (vitrerie) interventionTypes.push('Vitrerie');
    if (aspirateur) interventionTypes.push('Aspirateur');
    if (entretien) interventionTypes.push('Entretien général');

    const interventionString = interventionTypes.join(', '); //"join" pour afficher les éléments à la suite

    // Affectation des données récupérées aux éléments de recap.html
    document.getElementById('clientName').textContent = nom;
    document.getElementById('interventionDate').textContent = date;
    document.getElementById('interventionType').textContent = interventionString;
}
