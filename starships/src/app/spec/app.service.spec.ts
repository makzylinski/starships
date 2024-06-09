import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { EntityEnum } from '../models/entity.enum';
import { AppService } from '../services/app.service';
import { mockPerson } from './mocks/mockPerson';
import { mockStarship } from './mocks/mockStarship';

describe('AppService', () => {
  let service: AppService;
  let httpTestingController: HttpTestingController;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule],
      providers: [
        AppService,
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    });

    service = TestBed.inject(AppService);
    httpTestingController = TestBed.inject(HttpTestingController);
    snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;

    spyOn(service, 'getRandomEntity').and.returnValues(1, 1);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch a person', () => {
    service.fetchCard(EntityEnum.PEOPLE).subscribe((person) => {
      expect(person).toEqual(mockPerson);
    });

    const req = httpTestingController.expectOne(`${service['baseURL']}people/1`);
    expect(req.request.method).toEqual('GET');
    req.flush({ result: { properties: mockPerson } });
  });

  it('should fetch a starship', () => {
    service.fetchCard(EntityEnum.STARSHIPS).subscribe((starship) => {
      expect(starship).toEqual(mockStarship);
    });

    const req = httpTestingController.expectOne(`${service['baseURL']}starships/1`);
    expect(req.request.method).toEqual('GET');
    req.flush({ result: { properties: mockStarship } });
  });

  it('should handle fetchCard error', () => {
    service.fetchCard(EntityEnum.PEOPLE).subscribe(
      () => fail('expected an error, not data'),
      (error) => expect(error).toBeUndefined()
    );
  
    const req = httpTestingController.expectOne(`${service['baseURL']}people/1`);
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  
    
    expect(snackBar.open).toHaveBeenCalledWith('Http failure response for https://www.swapi.tech/api/people/1: 500 Server Error', 'Error', { duration: 3500 });
  });

  it('should determine winner correctly', () => {
    const cardOne$ = of(mockPerson);
    const cardTwo$ = of(mockPerson);

    service.determineWinner(cardOne$, cardTwo$, EntityEnum.PEOPLE).subscribe((result) => {
      expect(result.winner).toEqual(EntityEnum.DRAW);
    });
  });

  it('should get and update player win count', () => {
    localStorage.setItem(EntityEnum.PLAYER_1, '2');

    expect(service.getPlayerWinCount(EntityEnum.PLAYER_1)).toBe(2);

    service.updatePlayerWinCount(EntityEnum.PLAYER_1);
    expect(service.getPlayerWinCount(EntityEnum.PLAYER_1)).toBe(3);
  });
});