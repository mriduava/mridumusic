import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicdataService {

  constructor(private musicConnect: HttpClient) { }

  getMusic(artist: string) {
    return this.musicConnect.get(`https://itunes.apple.com/search?term=${artist}&entity=musicVideo`)
  }

  getMore(trackId: string) {
    return this.musicConnect.get(`https://itunes.apple.com/search?term=${trackId}&entity=musicVideo`)
  }
}
