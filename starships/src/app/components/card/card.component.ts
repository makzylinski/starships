import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
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
  @Input() entity$: Observable<any>;
  attributesListItems: any;


  ngOnInit(): void {
    this.entity$.pipe(
      take(1),
      tap((entityInfo) =>
        this.attributesListItems = transformAttributesToListItems(entityInfo)
      )
    ).subscribe();
  }

}
