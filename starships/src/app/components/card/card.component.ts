import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Starship } from 'src/app/models/starship';
import { transformAttributesToListItems } from 'src/app/utils/attributes.utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() entity$: Observable<Person | Starship>;
  @Input() name: string;

  entityListItems: string[];

  ngOnInit(): void {
    this.entity$.pipe(
      map(entity => transformAttributesToListItems(entity)),
      tap((transformedList) => this.entityListItems = transformedList)
    ).subscribe();
  }
}
