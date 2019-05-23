import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicdataService } from '../musicdata.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  mores = [];

  trackId: string;

  constructor(private route: ActivatedRoute, private musicData: MusicdataService) { }

  ngOnInit() {

      const trackId = this.route.snapshot.params['trackId'];
      this.musicData.getMore(trackId).subscribe(( source: any) => {
      this.mores = source.results;
      console.log(this.mores);
    });
  }

}
