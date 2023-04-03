import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesListComponent} from "./components/games-list/games-list.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', component: GamesListComponent},
  {path: 'games', redirectTo: ''},
  {path: '**', redirectTo: '/games', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
