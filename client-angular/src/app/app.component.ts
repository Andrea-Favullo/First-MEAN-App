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
  results: string[];
  prodotti: Products[];

  obs: Observable<Data>;
  obsProdotti: Observable<Products[]>;

  url: string = 'https://3000-de6ab8fc-bf82-401d-9b77-d1cf3d343e91.ws-eu01.gitpod.io/api/products';

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    /* VECCHIO METODO
    this.http.get().subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data)
    });*/
  }

  getProducts(): void{
    // NUOVO METODO
    this.obsProdotti = this.http.get<Products[]>(this.url);
    this.obsProdotti.subscribe(this.prepareProdotti);
  }

  prepareData = (data: Data) => {
    this.results = data['results'];
    console.log(data)
  }

  prepareProdotti = (prodotti: Products[]) => {
    this.prodotti = prodotti;
    console.log(prodotti)
  }
}
