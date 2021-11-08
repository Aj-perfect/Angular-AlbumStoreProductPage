
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Product } from './product';


@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = "../assets/album.json";
  private _productsUrl = "../assets/product.json";

  getAlbum (id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response) => <Album>response.json())
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json())
  }

}
