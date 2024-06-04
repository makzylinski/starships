import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Starship } from 'src/app/models/starship';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() entity$: Observable<any>;

}
