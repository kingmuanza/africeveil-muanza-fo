import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-haut',
  templateUrl: './menu-haut.component.html',
  styleUrls: ['./menu-haut.component.scss']
})
export class MenuHautComponent implements OnInit, OnChanges {

  @Input() position: number;
  langue = 'FR';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  changerLangue(langue) {
    this.langue = langue;
    localStorage.setItem('COPABLangue', langue);
    window.location.reload();
  }
}
