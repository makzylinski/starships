import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { CardComponent } from '../components/card/card.component';
import { EntityEnum } from '../models/entity.enum';
import { AppService } from '../services/app.service';
import { EntitySwitcherComponent } from '../components/entity-switcher/entity-switcher.component';
import { mockPerson } from './mocks/mockPerson';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: jasmine.SpyObj<AppService>;

  beforeEach(async () => {
    const appServiceSpy = jasmine.createSpyObj('AppService', ['fetchCard', 'determineWinner']);
    appServiceSpy.fetchCard.and.returnValue(of(mockPerson));
    appServiceSpy.determineWinner.and.returnValue(of({ winner: EntityEnum.PLAYER_1, playerOneScore: 1, playerTwoScore: 0 }));

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        EntitySwitcherComponent
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AppService, useValue: appServiceSpy }
      ]
    }).compileComponents();

    appService = TestBed.inject(AppService) as jasmine.SpyObj<AppService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cards on init', fakeAsync(() => {
    appService.fetchCard.calls.reset();
    component.ngOnInit();
    tick();
    expect(appService.fetchCard).toHaveBeenCalledTimes(2);
    expect(component.cardOne$).toBeDefined();
    expect(component.cardTwo$).toBeDefined();
  }));

  it('should fetch cards with the specified entity type', fakeAsync(() => {
    appService.fetchCard.calls.reset();
    component.fetchCards(EntityEnum.STARSHIPS);
    tick();
    expect(appService.fetchCard).toHaveBeenCalledWith(EntityEnum.STARSHIPS);
    expect(appService.fetchCard).toHaveBeenCalledTimes(2);
    expect(component.cardOne$).toBeDefined();
    expect(component.cardTwo$).toBeDefined();
  }));

  it('should determine winner correctly', fakeAsync(() => {
    appService.fetchCard.calls.reset();
    appService.determineWinner.calls.reset();
    component.fetchCards(EntityEnum.PEOPLE);
    tick();
    expect(appService.determineWinner).toHaveBeenCalledTimes(1);
    expect(component.winnerData$).toBeDefined();
  }));
});