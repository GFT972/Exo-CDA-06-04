(function() {
    const postIt = document.getElementById('postIt');
    const afficheBtn = document.getElementById('afficheBtn');
    const cacheBtn = document.getElementById('cacheBtn');
    const survolTxt = document.getElementById('survolTxt');

    // Fonction pour afficher la div postIt et y insérer un texte
    afficheBtn.addEventListener('click', function() {
        postIt.style.visibility = 'visible';
        postIt.innerHTML = 'Vous avez cliqué sur le bouton \'Affiche\' !';
    });

    // Fonction pour cacher la div postIt
    cacheBtn.addEventListener('click', function() {
        postIt.style.visibility = 'hidden';
    });

    // Fonction pour afficher la div postIt lors du survol et y insérer un texte
    survolTxt.addEventListener('mouseover', function() {
        postIt.style.visibility = 'visible';
        postIt.innerHTML = 'C\'est gentil de me survoler...';
    });

    // Fonction pour cacher la div postIt quand la souris sort du texte
    survolTxt.addEventListener('mouseout', function() {
        postIt.style.visibility = 'hidden';
    });
})();

