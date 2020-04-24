import { Component, OnInit } from '@angular/core';
import { ScrollingService } from 'src/app/services/scrolling.service';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from 'src/app/models/livre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librairie',
  templateUrl: './librairie.component.html',
  styleUrls: ['./librairie.component.scss']
})
export class LibrairieComponent implements OnInit {

  livres = new Array<Livre>();
  livresResultat = new Array<Livre>();
  recherche = '';

  constructor(
    private scrollingService: ScrollingService,
    private router: Router,
    private livreService: LivreService
  ) {
    this.scrollingService.autoriserChangement(false);
  }

  ngOnInit(): void {
    this.scrollingService.autoriserChangement(false);
    this.livreService.getLivres().then((livres) => {
      this.livres = livres;
      this.livresResultat = livres;
    });
  }

  commander(livre: Livre) {
    this.router.navigate(['librairie', livre.id]);
  }

  rechercher(ev) {
    this.livresResultat = this.livres;
    console.log(ev);
    this.livresResultat = this.livresResultat.filter((livre) => {
      const b = livre.titre.toLocaleLowerCase().indexOf(ev.toLocaleLowerCase()) !== -1;
      if (b) {
        return true;
      }
    });
  }

}
