import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntityEnum } from 'src/app/models/entity.enum';
import { EntitySwitcherComponent } from '../components/entity-switcher/entity-switcher.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

describe('EntitySwitcherComponent', () => {
  let component: EntitySwitcherComponent;
  let fixture: ComponentFixture<EntitySwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntitySwitcherComponent],
      imports: [MatIconModule, HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitySwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render buttons for each entity', () => {
    const switcherElement = fixture.debugElement.query(By.css('.switcher'));
    expect(switcherElement).toBeTruthy();

    const peopleButton = fixture.debugElement.query(By.css('.switcher__people'));
    expect(peopleButton).toBeTruthy();

    const starshipsButton = fixture.debugElement.query(By.css('.switcher__starships'));
    expect(starshipsButton).toBeTruthy();
  });

  it('should emit proper entity when a button is clicked', () => {
    spyOn(component.entityChanged, 'emit');

    const peopleButton = fixture.debugElement.query(By.css('.switcher__people'));
    peopleButton.triggerEventHandler('click', null);
    expect(component.entityChanged.emit).toHaveBeenCalledWith(EntityEnum.PEOPLE);

    const starshipsButton = fixture.debugElement.query(By.css('.switcher__starships'));
    starshipsButton.triggerEventHandler('click', null);
    expect(component.entityChanged.emit).toHaveBeenCalledWith(EntityEnum.STARSHIPS);
  });
});