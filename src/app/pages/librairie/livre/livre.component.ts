import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollingService } from 'src/app/services/scrolling.service';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from 'src/app/models/livre.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifyService, DialogComponent } from 'ng-metro4';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent implements OnInit {

  @ViewChild('dialog', { static: true }) dialog: DialogComponent;
  id: string;
  livre: Livre;
  commandeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private scrollingService: ScrollingService,
    private router: Router,
    public notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private livreService: LivreService
  ) {
    this.scrollingService.autoriserChangement(false);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.id = id;
        this.livreService.getLivre(id).then((livre) => {
          this.livre = livre;
        });
      }
    });
    this.initForm();
  }

  initForm() {
    this.commandeForm = this.formBuilder.group({
      quantite: [1, [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
    });
  }

  onCommandeFormSubmit() {
    const value = this.commandeForm.value;
    localStorage.setItem('AfricEveilData', JSON.stringify(value));
    this.notifyService.create('Votre commande a bien été enregistrée', 'Information', { cls: 'success'});
    this.dialog.close();
  }

  commander(livre) {

  }

  amazon(livre: Livre) {
    window.open(livre.amazon);
  }

}
