import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPage } from './news/news.page';
import { AboutPage } from './about/about.page';
import { BeersPage } from './beers/beers.page';
import { ContactPage } from './contact/contact.page';

const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news', component: NewsPage},
  {path: 'beers', component: BeersPage},
  {path: 'about', component: AboutPage},
  {path: 'contact', component: ContactPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
