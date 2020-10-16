import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP CLIENT

import { Data } from './models/data.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  results: string[];
  private BASE_URL: string = '/api';

  obs: Observable<Data>;
  url: string = 'https://3000-de6ab8fc-bf82-401d-9b77-d1cf3d343e91.ws-eu01.gitpod.io/api';
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // NUOVO METODO
    this.obs = this.http.get<Data>(this.url);
    this.obs.subscribe(this.prepareData);

    /* VECCHIO METODO
    this.http.get().subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data)
    });*/
  }

  prepareData = (data: Data) => {
    this.results = data['results'];
    console.log(data)
  }
}
