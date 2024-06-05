import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Person } from '../models/person';
import { Entity } from '../models/entity';
import { EntityEnum, } from '../models/entity.enum';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly baseURL = 'https://www.swapi.tech/api/';

  private readonly http = inject(HttpClient)

    getPeople = (id: number): Observable<any> =>
      this.http.get<Entity>(`${this.baseURL}${EntityEnum.PEOPLE}/${id}`).pipe(
        map(person => person.result.properties)
      );

      getStarships = (id: number): Observable<any> =>
        this.http.get<Entity>(`${this.baseURL}${EntityEnum.STARSHIPS}/${id}`).pipe(
          map(starship => starship.result.properties)
        )
  
}
