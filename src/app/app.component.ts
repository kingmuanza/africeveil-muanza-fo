import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollingService } from './services/scrolling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Y = 0;
  Ysubscription: Subscription;

  langue = 'FR';

  constructor(private scrollingService: ScrollingService) {
  }

  ngOnInit(): void {
    this.Ysubscription = this.scrollingService.changementMenuHautSubject.subscribe((changementMenuHaut) => {
      if (changementMenuHaut) {
        this.Y = 0;
      } else {
        this.Y = 100;
      }
    });
    if (this.scrollingService.changementMenuHaut) {
      this.Y = 0;
    } else {
      this.Y = 100;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.scrollingService.changementMenuHaut) {
      console.log('Scrolling!');
      console.log(window.scrollY);
      const YPosition = window.scrollY;
      this.Y = window.scrollY;
    } else {
      this.Y = 100;
    }
  }
}
