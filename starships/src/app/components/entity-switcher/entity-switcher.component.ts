import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { EntityEnum } from 'src/app/models/entity.enum';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-entity-switcher',
  templateUrl: './entity-switcher.component.html',
  styleUrl: './entity-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntitySwitcherComponent implements OnInit {

  activeEntity = EntityEnum.PEOPLE;
  public get EntityEnum() {
    return EntityEnum;
  }
  private readonly appService = inject(AppService)

  ngOnInit(): void {
    // this.appService.fetchTwoCards(this.activeEntity)
  }

  toggleEntity = (entity: EntityEnum) => {
    this.activeEntity = entity;
  }
}
