import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicdataService } from '../musicdata.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  musicAlbums = [];

  constructor(private route: ActivatedRoute, private albumShow: MusicdataService) { }

  ngOnInit() {
    this.route.params.subscribe(album => {
      console.log(album);
      this.albumShow.getMusic().subscribe((album: any) => {
        this.musicAlbums = album.results;
        console.log(this.musicAlbums);
      });
    });
  }

}
