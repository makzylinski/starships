import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EntityEnum } from 'src/app/models/entity.enum';

@Component({
  selector: 'app-entity-switcher',
  templateUrl: './entity-switcher.component.html',
  styleUrl: './entity-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntitySwitcherComponent {

  activeEntity = EntityEnum.PEOPLE;
  public get EntityEnum() {
    return EntityEnum;
  }

  toggleEntity = (entity: EntityEnum) => this.activeEntity = entity;

}
