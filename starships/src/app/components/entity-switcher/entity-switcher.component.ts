import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { EntityEnum } from 'src/app/models/entity.enum';

@Component({
  selector: 'app-entity-switcher',
  templateUrl: './entity-switcher.component.html',
  styleUrl: './entity-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntitySwitcherComponent {
  @Output() entityChanged: EventEmitter<EntityEnum> = new EventEmitter<EntityEnum>();

  activeEntity = EntityEnum.PEOPLE;
  public get EntityEnum() {
    return EntityEnum;
  }

  toggleEntity = (entity: EntityEnum): void => {
    this.activeEntity = entity;
    this.entityChanged.emit(entity)
  }
}
