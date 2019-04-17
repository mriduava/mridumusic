import { Component, OnInit, Input } from '@angular/core';
import { MusicdataService } from '../musicdata.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  animations: [
    trigger('fade', [
      transition('void =>*', [
        style({opacity:0}),
        animate(1000)
      ])
    ])
  ]
})
export class MusicComponent implements OnInit {

  @Input() input: string;

  musics = [];

  constructor(private route: ActivatedRoute, private musicData: MusicdataService) { }

  ngOnInit() {
    this.route.params.subscribe(artist => {
      // console.log(artist);
      this.musicData.getMusic(artist.music).subscribe(( source: any) => {
      this.musics = source.results;
      console.log(this.musics);
    });
  });
  }
}
