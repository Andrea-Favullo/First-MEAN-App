import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP CLIENT

import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prodotti: Product[];
  obsProdotti: Observable<Product[]>;

  url: string = 'https://3000-bb4b602a-7699-4c4a-b063-a6f66c1ba49c.ws-eu01.gitpod.io';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {  }

  getProducts(): void{
    this.obsProdotti = this.http.get<Product[]>(this.url.concat("/api/products"));
    this.obsProdotti.subscribe(this.prepareProdotti);
  }

  prepareProdotti = (prodotti: Product[]) => {
    this.prodotti = prodotti.products;
    console.log(this.prodotti)
  }
}
