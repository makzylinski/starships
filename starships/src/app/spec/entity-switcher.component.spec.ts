import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySwitcherComponent } from '../components/entity-switcher/entity-switcher.component';

describe('EntitySwitcherComponent', () => {
  let component: EntitySwitcherComponent;
  let fixture: ComponentFixture<EntitySwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitySwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntitySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
