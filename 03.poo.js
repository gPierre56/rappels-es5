Personne = function (nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ' ' +  this.prenom + ' ' + this.pseudo;
    }
    this.getInitiales = function () {
        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
}

jules = new Personne('LEMAIRE', 'Jules', 'jules77');
paul = new Personne('LEMAIRE', 'Paul', 'paul44');
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());
afficherPersonne = function (Personne) {
    console.log(Personne.nom);
    console.log(Personne.prenom);
    console.log(Personne.pseudo);
    console.log(Personne.getNomComplet())
};
afficherPersonne(paul);
jules.pseudo = 'jules44';
//Object.defineProperty(jules, 'pseudo', {value: 'jules44', writable : true});
console.log(jules.getNomComplet());

console.log(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age = 30;
console.log(jules.age);
console.log(jules.getInitiales());

robert = {
    prenom: 'Robert',
    nom : 'LEPREFET',
    pseudo : 'robert77',
    getNomComplet : function () {
        return this.nom + ' ' +  this.prenom + ' ' + this.pseudo;
    }
};

afficherPersonne(robert);

Client = function (nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.nom + ' ' +  this.prenom + ' '  + this.pseudo + ' ' +this.numeroClient;
    }
};

steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
