import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';
import { Starship } from './models/starship';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  people$: Observable<Person>;
  starship$: Observable<Starship>

  private readonly appService = inject(AppService)

  ngOnInit(): void {
    this.people$ = this.appService.getPeople(3);
    this.starship$ = this.appService.getStarships(10);
  }

}
