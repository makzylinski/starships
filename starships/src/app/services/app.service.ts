import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, catchError, forkJoin, map } from 'rxjs';
import { Entity } from '../models/entity';
import { EntityEnum, } from '../models/entity.enum';
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
      catchError((err, caught) => {
        this.openSnackBar(err.message, 'Error');
        return EMPTY;
      })
    );

  private getStarships = (id: number): Observable<any> =>
    this.http.get<Entity>(`${this.baseURL}${EntityEnum.STARSHIPS}/${id}`).pipe(
      map(starship => starship.result.properties),
      catchError((err, caught) => {
        this.openSnackBar(err.message, 'Error')
        console.log(err, caught);
        return EMPTY;
      })
    )

  getRandomEntity = (type: EntityEnum): number => type === EntityEnum.PEOPLE ? Math.floor(Math.random() * HIGHEST_POPLE_ID) : Math.floor(Math.random() * HIGHEST_STARSHIP_ID);

  fetchCard = (type: EntityEnum) => type === EntityEnum.PEOPLE ? this.getPeople(this.getRandomEntity(EntityEnum.PEOPLE)) : this.getStarships(this.getRandomEntity(EntityEnum.STARSHIPS));

  openSnackBar(message: string, action: string) { 
    this.snackBar.open(message, action, { 
      duration: 3500, 
    }); 
  }

  determineWinner = (cardOne$: Observable<any>, cardTwo$: Observable<any>, type: EntityEnum) => 
    forkJoin([cardOne$, cardTwo$]).pipe(
      map(([cardOne, cardTwo]) => {
        let winner: EntityEnum;
        if (cardOne && cardTwo) {
          
          if(type === EntityEnum.PEOPLE) {
            const cardOneMass = parseInt(cardOne.mass);
            const cardTwoMass = parseInt(cardTwo.mass);
  
            if(cardOneMass > cardTwoMass) winner = EntityEnum.PLAYER_1
            else if (cardOneMass < cardTwoMass) winner = EntityEnum.PLAYER_2
            else winner = EntityEnum.DRAW
          } else {
            const cardOneCrew = parseInt(cardOne.crew);
            const cardTwoCrew = parseInt(cardTwo.crew);

            if(cardOneCrew > cardTwoCrew) winner = EntityEnum.PLAYER_1
            else if (cardOneCrew < cardTwoCrew) winner = EntityEnum.PLAYER_2
            else winner = EntityEnum.DRAW
          }

          if (winner === EntityEnum.PLAYER_1) this.updatePlayerWinCount(EntityEnum.PLAYER_1);
          else if (winner === EntityEnum.PLAYER_2) this.updatePlayerWinCount(EntityEnum.PLAYER_2);

        return {
          winner,
          playerOneScore: this.getPlayerWinCount(EntityEnum.PLAYER_1),
          playerTwoScore: this.getPlayerWinCount(EntityEnum.PLAYER_2)
        }
      }})
    )
  
  getPlayerWinCount = (player: EntityEnum) => {
    const winCount = localStorage.getItem(player);
    return winCount ? parseInt(winCount) : 0;
  }

  updatePlayerWinCount = (player: EntityEnum) => {
    const currentPlayerWinCount = this.getPlayerWinCount(player);
    const updatedPlayerCount = currentPlayerWinCount + 1;
    localStorage.setItem(player, updatedPlayerCount.toString());
  }
}
