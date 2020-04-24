import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles = new Array<Article>();

  constructor() {
    const article1 = new Article('1', 'A TRIBUTE TO WINNIE MANDELA: THE AMAZON OF FREEDOM');
    // tslint:disable-next-line:max-line-length
    article1.introduction = 'Winnie Madikizela Mandela, the uncontested Queen of South African politics, died on April 2nd 2018, and was buried on Saturday, April 14, 2018. In a packed Orlando Stadium, more than 35000 mourners came to pay their ultimate tribute to their idol. Among the most identifiable personalities were the highly ranked representatives of the state, President Cyril Ramaphosa in person,...';
    // tslint:disable-next-line:max-line-length
    article1.image = 'https://firebasestorage.googleapis.com/v0/b/africeveil.appspot.com/o/capturewinnie.png?alt=media&token=d7d8170a-4ef3-4bb0-be23-2baa8ff7b82a';

    const article2 = new Article('2', 'Hommage à Winnie Mandela : l’amazone de la liberté');
    // tslint:disable-next-line:max-line-length
    article2.introduction = 'Décédée le 02 avril 2018, Winnie Madikizela Mandela, l’incontestable diva politique de l’Afrique du Sud, a été inhumée...';
    article2.image = article1.image;

    const article3 = new Article('3', 'Education et dialogue : les meilleurs outils pour une veritable construction nationale');
    // tslint:disable-next-line:max-line-length
    article3.introduction = 'Jamais dans l’histoire moderne des émancipations populaires, la stratégie consistant à ne pas aller à l’école s’est soldée...';
    this.articles.push(article1);
    this.articles.push(article2);
    this.articles.push(article3);
  }

  getArticles(): Promise<Array<Article>> {
    return new Promise((resolve, reject) => {
      resolve(this.articles);
    });
  }

  getArticle(id: string): Promise<Article> {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.articles.length; i++) {
        const article = this.articles[i];
        if (article.id === id) {
          resolve(article);
        }
      }
    });
  }
}
