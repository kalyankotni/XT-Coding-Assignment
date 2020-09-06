import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import {HttpClientModule} from '@angular/common/http';
import {DisplayService} from '../display.service';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponent],
      imports: [HttpClientModule],
      providers: [DisplayService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should create ngOnChanges', () => {
    spyOn(component, 'ngOnChanges').and.callThrough();
    component.ngOnChanges();
    expect(component.ngOnChanges).toBeTruthy();
  });
});
