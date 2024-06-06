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
  defaultEntityType = EntityEnum.PEOPLE;
  cardOne$: Observable<any>;
  cardTwo$: Observable<any>;

  private readonly appService = inject(AppService)

  ngOnInit(): void {
    this.fetchCards(this.defaultEntityType);
  }

  fetchCards = (type: EntityEnum): void => {
    this.cardOne$ = this.appService.fetchCard(type);
    this.cardTwo$ = this.appService.fetchCard(type);
  }

}
