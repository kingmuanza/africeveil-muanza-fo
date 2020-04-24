import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livres = new Array<Livre>();

  constructor() {
    const livre1 = new Livre('1', 'Thomas SANKARA et L\'émergence de l\'Afrique au XXIème siècle', 9000);
    // tslint:disable-next-line:max-line-length
    livre1.couverture = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/sankara.png?alt=media&token=ff99ff51-396c-4d6c-8c0e-923b29c78dfd';
    // tslint:disable-next-line:max-line-length
    livre1.amazon = 'https://www.amazon.fr/Thomas-Sankara-l%C3%A9mergence-lAfrique-si%C3%A8cle-ebook/dp/B016OHZUKM/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=19CDXY40SA88M&dchild=1&keywords=thomas+sankara&qid=1587296393&s=books&sprefix=thomas+sanka%2Cstripbooks%2C268&sr=1-10';

    const livre2 = new Livre('2', 'Vie et Mort de Mouamar AL-KADHAFI Quelles leçons pour l’Afrique ?', 9000);
    // tslint:disable-next-line:max-line-length
    livre2.couverture = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/kadhafi.png?alt=media&token=250ed98c-ac01-408e-8682-3bc9264655ba';
    // tslint:disable-next-line:max-line-length
    livre2.amazon = 'https://www.amazon.fr/Mouamar-AL-KADHAFI-Quelles-le%C3%A7ons-lAfrique-ebook/dp/B00A7EPJKU/ref=sr_1_5?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=jean-emmanuel+PONDI&qid=1587297789&s=books&sr=8-5';

    const livre4 = new Livre('3', 'LIFE AND DEATH OF MUAMMAR AL-QADHAFI What lessons for Africa? (English Edition)', 9000);
    // tslint:disable-next-line:max-line-length
    livre4.couverture = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/couverture%20engPr%C3%A9sa%20kadhafi.png?alt=media&token=af0f7459-96b1-477e-abea-a77b9c621f74';
    // tslint:disable-next-line:max-line-length

    const livre3 = new Livre('4', 'Nelson Mandela : An example for humanity (English Edition)', 9000);
    // tslint:disable-next-line:max-line-length
    livre3.couverture = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/couverture%20eng%20nelson%20mandela.png?alt=media&token=0ebe4552-f18d-47ef-87bf-70d4e4a2c1c3';
    // tslint:disable-next-line:max-line-length
    livre3.amazon = 'https://www.amazon.fr/dp/B00LPUDV8W';

    const livre5 = new Livre('5', 'Nelson Mandela : Un exemple pour l\'humanité', 9000);
    // tslint:disable-next-line:max-line-length
    livre5.couverture = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/mandela.png?alt=media&token=2c508d60-a875-4ab3-98d8-f09b8af20af5';
    // tslint:disable-next-line:max-line-length
    livre5.amazon = 'https://www.amazon.fr/Nelson-Mandela-exemple-pour-lhumanit%C3%A9-ebook/dp/B00LPRRW5S/ref=sr_1_8?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=jean-emmanuel+PONDI&qid=1587297922&sr=8-8';


    this.livres.push(livre1);
    this.livres.push(livre2);
    this.livres.push(livre4);
    this.livres.push(livre3);
    this.livres.push(livre5);
  }

  getLivres(): Promise<Array<Livre>> {
    return new Promise((resolve, reject) => {
      resolve(this.livres);
    });
  }

  getLivre(id: string): Promise<Livre> {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.livres.length; i++) {
        const livre = this.livres[i];
        if (livre.id === id) {
          resolve(livre);
        }
      }
    });
  }
}
