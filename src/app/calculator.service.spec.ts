import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
// import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  // let logger: LoggerService

  beforeEach(() => {
    // TestBed.configureTestingModule({ providers : [LoggerService] });
    TestBed.configureTestingModule({})
    service = TestBed.inject(CalculatorService);
    // logger = TestBed.inject(LoggerService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    const logger = jasmine.createSpyObj("LoggerService", ["log"])
    const calculator = new CalculatorService(logger)
    const result = calculator.add(2, 3)
    expect(result).toBe(5)
    expect(logger.log).toHaveBeenCalledTimes(1)
  })

  it('should substract 2 numbers', () => {
    const logger = jasmine.createSpyObj("LoggerService", ["log"])
    const calculator = new CalculatorService(logger)
    const result = calculator.substract(4, 1)
    expect(result).toBe(3)
  })
});
