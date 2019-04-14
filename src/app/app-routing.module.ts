import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':music', component: MusicComponent },
  { path: ':music/:album', component: AlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
