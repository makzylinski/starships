import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Person } from '../models/person';
import { Spaceship } from '../models/spaceship';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly baseURL = 'https://www.swapi.tech/api/';

  private readonly http = inject(HttpClient)

  getPersonOrSpaceship = (type: string, id: number): Observable<any> => 
    this.http.get<Spaceship | Person>(`${this.baseURL}${type}/${id}`).pipe(
      map(entity => entity.result.properties),
    );
  
}
