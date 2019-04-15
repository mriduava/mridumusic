import { Component, OnInit } from '@angular/core';
import { MusicdataService } from '../musicdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  musics = [];

  constructor(private route: ActivatedRoute, private musicData: MusicdataService) { }

  ngOnInit() {
    this.route.params.subscribe(artist => {
      console.log(artist);
      this.musicData.getMusic(artist.music).subscribe(( source: any) => {
      this.musics = source.results;
      console.log(this.musics);
    });
  });
  }
}
