import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { transformAttributesToListItems } from 'src/app/utils/attributes.utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() entity$: Observable<any>;
  @Input() name: string;

  entityListItems: any;

  ngOnInit(): void {
    this.entity$.pipe(
      map(entity => transformAttributesToListItems(entity)),
      tap((transformedList) => this.entityListItems = transformedList)
    ).subscribe();
  }
}
