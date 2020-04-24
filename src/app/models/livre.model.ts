export class Livre {
    id: string;
    titre: string;
    description: string;
    prix: number;
    pages: number;
    edition: string;
    auteur: string;
    couverture: string;
    datePublication: Date;
    amazon: string;

    constructor(id: string, titre: string, prix: number) {
        this.id = id;
        this.titre = titre;
        this.prix = prix;
        this.auteur = 'Professeur Jean-Emmanuel PONDI';
        this.edition = 'Éditions Afric\'éveil';
        this.datePublication = new Date('15-11-2015');
    }

    getID() {
        return Math.floor(Math.random() * 1000) + '';
    }


}
