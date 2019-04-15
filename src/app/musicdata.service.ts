import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicdataService {

  constructor(private musicconnect: HttpClient) { }

  getMusic(artist: string) {
    return this.musicconnect.get(`https://itunes.apple.com/search?term=${artist}&entity=musicVideo`)
  }
}
