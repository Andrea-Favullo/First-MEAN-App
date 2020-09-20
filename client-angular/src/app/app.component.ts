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
  url: string='https://3000-ba4f9bba-754f-4996-b5b5-2f81dbb0d058.ws-eu01.gitpod.io/api';
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.obs = this.http.get<Data>(this.url);

    this.obs.subscribe( data=>{
      this.results = data['results'];
      console.log(data)
    } );
    /*
    this.http.get().subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data)
    });*/
  }
}
