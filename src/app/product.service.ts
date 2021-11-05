
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  private _albumUrl = "../assets/album.json";

  getAlbum (id: number){
    return this._http.get(this._albumUrl).pipe(map(response => response.json)) 
  }

}
