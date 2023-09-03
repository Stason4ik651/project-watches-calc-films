import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HomeComponent } from './pages/home-page/components/home/home.component';
import { MovieComponent } from './pages/movies/movie.component';
import { WatchesComponent } from './pages/watches/watches.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'movies', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
