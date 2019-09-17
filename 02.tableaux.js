villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (ville) {
    console.log(ville);
});

lettreA = villes.every(function (ville) {
    return ville.includes('a');
});

console.log(lettreA);

auMoinsUneVilleAvecUnTiret = villes.some(function (ville) {
    return ville.includes('-');
});

console.log(auMoinsUneVilleAvecUnTiret);

auMoinsUneVilleAvecUnTiret = villes.filter(ville => !ville.includes(' ') && !ville.includes('-'));

console.log(auMoinsUneVilleAvecUnTiret);

villesMajusculeSeTerminantParS = villes.filter(ville => ville.endsWith('s')).map(ville => ville.toUpperCase());
console.log(villesMajusculeSeTerminantParS);

