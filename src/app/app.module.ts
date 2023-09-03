import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ButtonActionComponent } from './pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/calculator/components/general-button/general-button.component';
import { EnumPipe } from './pages/calculator/shared/pipes/enum-pipe.pipe';
import { HomeComponent } from './pages/home-page/components/home/home.component';
import { FilmComponent } from './pages/movies/components/film/film.component';
import { HeaderMoviesComponent } from './pages/movies/components/header-movies/header-movies.component';
import { PaginatorComponent } from './pages/movies/components/paginator/paginator.component';
import { PopupComponent } from './pages/movies/components/popup/popup.component';
import { MovieComponent } from './pages/movies/movie.component';
import { AnalogWatchComponent } from './pages/watches/components/analog-watch/analog-watch.component';
import { NumericComponent } from './pages/watches/components/digital-watch/components/numeric/numeric.component';
import { SeparatorComponent } from './pages/watches/components/digital-watch/components/separator/separator.component';
import { DigitalWatchComponent } from './pages/watches/components/digital-watch/digital-watch.component';
import { WatchesComponent } from './pages/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalWatchComponent,
    AnalogWatchComponent,
    NumericComponent,
    WatchesComponent,
    HeaderComponent,
    SeparatorComponent,
    CalculatorComponent,
    HomeComponent,
    MovieComponent,
    ButtonActionComponent,
    ButtonNumericComponent,
    ButtonOperationComponent,
    DisplayComponent,
    GeneralButtonComponent,
    EnumPipe,
    HeaderMoviesComponent,
    PaginatorComponent,
    FilmComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
