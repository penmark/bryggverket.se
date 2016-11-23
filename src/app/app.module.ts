import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsPage } from './news/news.page';
import { ApiService } from './api/api.service';
import { AboutPage } from './about/about.page';
import { BeersPage } from './beers/beers.page';
import { ContactPage } from './contact/contact.page';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RotPipe } from './rot.pipe';
import { reducer } from './api/api.reducer';
import { NewsEntryComponent } from './news/news-entry.component';
import { BeerComponent } from './beers/beer.component';
import { BeersComponent } from './beers/beers.component';
import { PageComponent } from './layout/page.component';
import { PageTitleComponent } from './layout/title.component';
import { BrewersComponent } from './about/brewers.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsPage,
    AboutPage,
    BrewersComponent,
    BeersPage,
    ContactPage,
    FooterComponent,
    RotPipe,
    HeaderComponent,
    NewsEntryComponent,
    BeerComponent,
    BeersComponent,
    PageComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(ApiService)
  ],
  providers: [
    ApiService,
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
