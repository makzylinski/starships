import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Person } from '../models/person';
import { Entity } from '../models/entity';
import { EntityEnum, } from '../models/entity.enum';
import { transformAttributesToListItems } from '../utils/attributes.utils';
import { MatSnackBar } from '@angular/material/snack-bar';

const HIGHEST_POPLE_ID = 83;
const HIGHEST_STARSHIP_ID = 49;

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private readonly baseURL = 'https://www.swapi.tech/api/';
  private readonly http = inject(HttpClient);
  private readonly snackBar = inject(MatSnackBar);

  private getPeople = (id: number): Observable<any> =>
    this.http.get<Entity>(`${this.baseURL}${EntityEnum.PEOPLE}/${id}`).pipe(
      map(person => person.result.properties),
      map(personProps => transformAttributesToListItems(personProps)),
      catchError((err, caught) => {
        this.openSnackBar(err.message, 'Error')
        console.log(err, caught);
        return ''
      })
    );

  private getStarships = (id: number): Observable<any> =>
    this.http.get<Entity>(`${this.baseURL}${EntityEnum.STARSHIPS}/${id}`).pipe(
      map(starship => starship.result.properties),
      map(starshipProps => transformAttributesToListItems(starshipProps)),
      catchError((err, caught) => {
        this.openSnackBar(err.message, 'Error')
        console.log(err, caught);
        return ''
      })
    )

  getRandomEntity = (type: EntityEnum): number => type === EntityEnum.PEOPLE ? Math.floor(Math.random() * HIGHEST_POPLE_ID) : Math.floor(Math.random() * HIGHEST_STARSHIP_ID);

  fetchCard = (type: EntityEnum) => type === EntityEnum.PEOPLE ? this.getPeople(this.getRandomEntity(EntityEnum.PEOPLE)) : this.getStarships(this.getRandomEntity(EntityEnum.STARSHIPS));

  openSnackBar(message: string, action: string) { 
    this.snackBar.open(message, action, { 
      duration: 3500, 
    }); 
  } 
}
