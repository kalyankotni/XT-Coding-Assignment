import { TestBed } from '@angular/core/testing';

import { DisplayService } from './display.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DisplayService', () => {
  let service: DisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({  imports: [ HttpClientTestingModule ],
      providers: [DisplayService]
    });
    service = TestBed.inject(DisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should create getMissions', () => {
    const url = 'hrheuirh';
    spyOn(service, 'getMissions').and.callThrough();
    service.getMissions(url);
    expect(service.getMissions).toBeTruthy();
  });
});
