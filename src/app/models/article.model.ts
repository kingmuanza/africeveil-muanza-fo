export class Article {
    id: string;
    image: string;
    titre: string;
    introduction: string;
    contenu: string;

    constructor(id: string, titre: string) {
        this.id = id;
        this.titre = titre;
    }
}
