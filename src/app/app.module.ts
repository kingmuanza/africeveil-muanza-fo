import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMetro4Module } from 'node_modules/ng-metro4';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CarouselComponent } from './pages/accueil/carousel/carousel.component';
import { NewsletterComponent } from './pages/accueil/newsletter/newsletter.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuHautComponent } from './components/menu-haut/menu-haut.component';
import { ArticlesComponent } from './pages/accueil/articles/articles.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LivreComponent } from './pages/librairie/livre/livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './pages/blog/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarouselComponent,
    NewsletterComponent,
    LibrairieComponent,
    BlogComponent,
    FooterComponent,
    MenuHautComponent,
    ArticlesComponent,
    AproposComponent,
    ContactsComponent,
    LivreComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    NgMetro4Module,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
