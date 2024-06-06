import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';
import { Starship } from './models/starship';
import { Person } from './models/person';
import { EntityEnum } from './models/entity.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  cardOne$: Observable<any>;
  cardTwo$: Observable<any>;

  private readonly appService = inject(AppService)

  ngOnInit(): void {
    this.fetchCards(EntityEnum.PEOPLE);
  }

  fetchCards = (type: EntityEnum): void => {
    this.cardOne$ = this.appService.fetchCard(type);
    this.cardTwo$ = this.appService.fetchCard(type);
  }

}
