import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LivreComponent } from './pages/librairie/livre/livre.component';
import { ArticleComponent } from './pages/blog/article/article.component';


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'librairie', component: LibrairieComponent},
  {path: 'librairie/:id', component: LivreComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: ArticleComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: 'accueil'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
