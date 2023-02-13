import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplayPagesComponent } from './example-display-pages.component';

describe('ExampleDisplayPagesComponent', () => {
  let component: ExampleDisplayPagesComponent;
  let fixture: ComponentFixture<ExampleDisplayPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExampleDisplayPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDisplayPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
