import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicdataService {

  constructor(private musicconnect: HttpClient) { }

  getMusic(artist = 'jennifer_lopez') {
    return this.musicconnect.get(`https://itunes.apple.com/search?term=${artist}&entity=musicVideo`)
  }
}
