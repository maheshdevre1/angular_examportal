import { TestBed } from '@angular/core/testing';
import { QuizservicesService } from './quizservices.service';


describe('QuizservicesService', () => {
  let service: QuizservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
