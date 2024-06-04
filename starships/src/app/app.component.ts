import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './services/app.service';
import { Entity } from './models/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  starships$: Observable<null>;

  private readonly appService = inject(AppService)

  ngOnInit(): void {
    this.starships$ = this.appService.getPersonOrSpaceship(Entity.PEOPLE, 3);

    this.starships$.subscribe(e => console.log(e))
  }

}
