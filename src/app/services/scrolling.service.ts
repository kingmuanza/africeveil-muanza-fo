import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  changementMenuHaut = true;
  changementMenuHautSubject = new Subject();
  scrollZoneSubject = new Subject<string>();

  constructor() {
    this.emit();
  }

  emit() {
    this.changementMenuHautSubject.next(this.changementMenuHaut);
  }

  emitZone(scrollZone) {
    this.scrollZoneSubject.next(scrollZone);
  }

  autoriserChangement(oui: boolean) {
    this.changementMenuHaut = oui;
    this.emit();
  }
}
