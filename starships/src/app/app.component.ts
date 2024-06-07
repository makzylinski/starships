import { Component, OnInit, inject } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { AppService } from './services/app.service';
import { EntityEnum } from './models/entity.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  defaultEntityType = EntityEnum.PEOPLE;
  cardOne$: Observable<any>;
  cardTwo$: Observable<any>;
  winnerData$: Observable<any>;

  private readonly appService = inject(AppService)

  ngOnInit(): void {
    this.fetchCards(this.defaultEntityType);
  }

  fetchCards = (type: EntityEnum): void => {
    this.cardOne$ = this.appService.fetchCard(type).pipe(shareReplay(1));
    this.cardTwo$ = this.appService.fetchCard(type).pipe(shareReplay(1));

    this.winnerData$ = this.appService.determineWinner(this.cardOne$, this.cardTwo$, type)
  }

}
