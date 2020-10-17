import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP CLIENT

import { Products } from './models/products.model';
import { Data } from './models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prodotti: JSON;
  obsProdotti: Observable<JSON>;

  url: string = 'https://3000-bb4b602a-7699-4c4a-b063-a6f66c1ba49c.ws-eu01.gitpod.io';

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) { }

  ngOnInit(): void {  }

  getProducts(): void{
    this.obsProdotti = this.http.get<JSON>(this.url.concat("/api/products"));
    this.obsProdotti.subscribe(this.prepareProdotti);
  }

  prepareProdotti = (prodotti: JSON) => {
    this.prodotti = prodotti;
    console.log(prodotti)
  }
}
